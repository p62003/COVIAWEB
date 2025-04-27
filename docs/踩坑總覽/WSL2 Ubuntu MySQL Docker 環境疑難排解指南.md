# WSL2 Ubuntu MySQL Docker 環境疑難排解指南

本文檔整合了在 WSL2 Ubuntu 環境中使用 Docker 運行 MySQL 時的常見問題解決方案，特別關注表名大小寫敏感性設置問題。

## 常見錯誤訊息解析

### 表名大小寫敏感性衝突

當遇到以下錯誤時，表示 MySQL 服務器和數據字典的大小寫敏感性設置不一致：

```
[ERROR] [MY-011087] [Server] Different lower_case_table_names settings for server ('0') and data dictionary ('2').
```

這常見於從 Windows 遷移到 Linux 環境的數據庫，或在 WSL2 中運行之前在 Windows 上初始化的 MySQL 容器。

另一個相關錯誤訊息：

```
[Warning] [MY-010160] [Server] lower_case_table_names was set to 2, even though your the file system '/var/lib/mysql/' is case sensitive. Now setting lower_case_table_names to 0 to avoid future problems.
```

這表明 MySQL 檢測到您嘗試在區分大小寫的文件系統上使用 `lower_case_table_names=2`，這是不支持的配置。

## 解決方案

### 1. 適當的 lower_case_table_names 設置

在不同操作系統上，應使用不同的設置：

| 操作系統 | 推薦設置 | 說明 |
|---------|---------|-----|
| Windows | 1 或 2  | Windows 文件系統不區分大小寫 |
| Linux   | 0 或 1  | Linux 文件系統區分大小寫，**不支持值 2** |
| macOS   | 1 或 2  | macOS 文件系統默認不區分大小寫 |

### 2. 正確配置 Docker 中的 MySQL

在 `docker-compose.yml` 中添加配置（推薦方法）：

```yaml
services:
  mysql:
    image: mysql:8.0
    command: --lower_case_table_names=1  # 在 Linux 環境中使用 1
    volumes:
      - ./mysql_data:/var/lib/mysql
      - ./mysql/my.cnf:/etc/mysql/conf.d/my.cnf
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      # 其他設置...
```

確保 `my.cnf` 文件內容（放在專案目錄的 `mysql` 子目錄中）：

```
[mysqld]
lower_case_table_names=1
```

### 3. 配置文件放置位置

配置文件應該正確放置在項目結構中：

```
專案目錄/
  ├── docker-compose.yml
  ├── mysql/                 # 創建此目錄
  │   └── my.cnf             # 配置文件放在這裡
  └── mysql_data/            # 數據會存儲在這裡（由 Docker 自動創建）
```

**重要**：不要將配置文件直接放在專案根目錄或數據目錄（`mysql_data`）中。

### 4. 已有數據的處理

如果 MySQL 已經初始化並包含數據，但遇到表名大小寫問題，有兩種選擇：

#### 選項 A：備份並重建數據庫（推薦）

```bash
# 1. 備份現有數據
docker-compose exec mysql mysqldump -u root -p --all-databases > full_backup.sql

# 2. 停止並移除容器
docker-compose down

# 3. 清除數據目錄
sudo rm -rf ./mysql_data/*

# 4. 正確設置配置並重新啟動
# (確保已修改 docker-compose.yml 和 my.cnf)
docker-compose up -d

# 5. 恢復數據
cat full_backup.sql | docker-compose exec -T mysql mysql -u root -p
```

#### 選項 B：使用新的數據卷

修改 `docker-compose.yml` 使用新的命名卷：

```yaml
services:
  mysql:
    # 其他設置...
    volumes:
      - mysql_fresh_data:/var/lib/mysql
      - ./mysql/my.cnf:/etc/mysql/conf.d/my.cnf

volumes:
  mysql_fresh_data:  # 定義新的命名卷
```

## 故障排除技巧

### 1. 查看錯誤日誌

```bash
docker-compose logs mysql
```

查找特定錯誤關鍵字：

```bash
docker-compose logs mysql | grep -i "lower_case_table_names"
```

### 2. 確認配置已被讀取

進入容器並檢查實際設置：

```bash
# 進入容器
docker-compose exec mysql bash

# 檢查設置
mysql -u root -p -e "SHOW VARIABLES LIKE 'lower_case_table_names';"
```

### 3. 驗證配置文件被正確掛載

```bash
docker-compose exec mysql ls -la /etc/mysql/conf.d/
```

## 最佳實踐

1. **跨平台開發**：在所有環境中統一使用 `lower_case_table_names=1`
2. **初始設置**：在初始化 MySQL 數據目錄之前設置此參數
3. **配置方式**：同時使用 `command` 和配置文件設置參數，確保雙重保障
4. **SQL 寫法**：無論使用哪種設置，始終以小寫形式編寫表名

## 結論

在 WSL2 Ubuntu 中使用 Docker 運行 MySQL 時，正確設置 `lower_case_table_names` 參數對於跨平台開發至關重要。記住：Linux 不支持值 2，應該使用值 1 來確保跨平台兼容性。