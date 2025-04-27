# Docker跨平台數據卷管理補充指南

本文檔補充了在Windows與Ubuntu間遷移Docker專案時的數據卷管理、權限處理及常見問題解決方案。

## Windows到Ubuntu遷移的數據卷問題

### 問題根源

從Windows遷移到Ubuntu環境時，經常遇到的核心問題：

1. **文件系統權限差異**：Windows不使用Unix文件權限系統(uid/gid)，而容器內部是基於Linux的，遷移時權限信息會丟失或錯亂
2. **卷配置差異**：從本地路徑映射改為命名卷時，Docker會創建全新的空卷，導致數據丟失
3. **主機系統差異**：這是Docker跨平台使用的固有挑戰，並非設計用來無縫遷移有狀態容器(特別是數據庫)

### 卷類型比較

| 卷類型 | 優點 | 缺點 | 適用場景 |
|--------|------|------|----------|
| 本地路徑映射`./data:/var/lib/mysql` | 便於直接訪問和管理 - 便於備份與遷移 | 主機用戶可能直接訪問 -權限管理複雜 | 開發環境、單用戶VPS |
| 命名卷`mysql_data:/var/lib/mysql` | 更好的隔離性 - 由Docker管理生命週期 | 難以直接訪問數據 - 跨系統遷移困難 | 生產環境、共享主機 |

## 數據卷權限修復

當從Windows遷移數據到Ubuntu時，必須修復文件權限：

```bash
# MySQL容器通常使用UID 999
sudo chown -R 999:999 ./mysql_data

# PostgreSQL容器也通常使用UID 999
sudo chown -R 999:999 ./postgres
```

## 卷配置不匹配的處理流程

當遇到以下錯誤時：
```
Volume "project_postgres_data" exists but doesn't match configuration in compose file. Recreate (data will be lost)?
```

處理步驟：

1. **備份數據庫**（如有重要數據）：
   ```bash
   # MySQL備份
   docker exec $(docker-compose ps -q mysql) mysqldump -uroot -prootpassword database_name > backup.sql
   
   # PostgreSQL備份
   docker exec $(docker-compose ps -q db) pg_dump -U username database_name > pg_backup.sql
   ```

2. **選擇處理方式**：
   - 回答"N"保留現有卷（但可能配置問題依然存在）
   - 回答"Y"重新創建卷（會丟失數據，需先備份）
   
3. **重新配置**：
   - 考慮使用一致的卷配置策略（本地路徑或命名卷）
   - 確保新數據目錄具有正確權限

## 開發和生產環境統一策略

### 使用環境變量控制卷配置

可以設計一個兼容兩種環境的docker-compose.yml：

```yaml
services:
  mysql:
    # 其他配置...
    volumes:
      - ${MYSQL_VOLUME_PATH:-mysql_data}:/var/lib/mysql

volumes:
  mysql_data:
```

配合`.env`文件：
```
# 開發環境使用本地路徑
MYSQL_VOLUME_PATH=./mysql_data

# 生產環境不設置此變量，使用命名卷
```

## 安全性考量

在同一台VPS上部署時的安全考量：

1. **本地路徑映射風險**：
   - 如果VPS有多個用戶帳戶，他們可能有權限訪問這些本地文件夾
   - 在同一VPS上運行的其他服務如果被入侵，可能訪問到數據文件

2. **適用情境**：
   - 私有VPS上僅自己使用：本地路徑映射風險可控
   - 共享VPS或多用戶環境：命名卷提供更好的隔離性

## 最佳實踐建議

1. **數據卷策略**：
   - 開發環境：優先使用本地路徑映射，便於管理和調試
   - 生產環境：優先使用命名卷，提高安全性

2. **遷移步驟**：
   - 使用數據庫原生工具(mysqldump/pg_dump)進行備份還原，而非直接複製數據文件
   - 確保權限正確設置後再啟動容器

3. **配置文件管理**：
   - 將數據庫特定配置（如lower_case_table_names）納入版本控制
   - 使用環境變量區分不同環境的配置需求