# Linux 環境下 MySQL lower_case_table_names 參數設置指南

本文檔說明在 Linux 環境中配置 MySQL 表名大小寫敏感性設置的注意事項和解決方案，特別適用於跨平台開發情境。

## 問題概述

在 Linux 環境中配置 MySQL 時，`lower_case_table_names` 參數的設置常常引發以下問題：

1. Linux 文件系統區分大小寫，導致某些 MySQL 參數設置不兼容
2. 從 Windows 或 macOS 遷移到 Linux 時出現大小寫敏感性衝突
3. 數據庫初始化後無法直接修改此參數

## lower_case_table_names 參數說明

此參數控制 MySQL 表名的大小寫敏感性：

| 參數值 | 行為 | 支持的操作系統 |
|--------|------|----------------|
| 0 | 區分大小寫 | 所有系統 |
| 1 | 全部轉為小寫 | 所有系統 |
| 2 | 存儲保留大小寫但比較不區分大小寫 | 僅 Windows 和 macOS |

> **重要**: Linux 環境下不支持 `lower_case_table_names=2`

## 跨平台數據庫遷移解決方案

### 從 Windows/macOS 遷移至 Linux

當需要將數據庫從 Windows 或 macOS 遷移到 Linux 服務器時：

1. **備份原始數據庫**:
   ```bash
   # 在源系統上執行
   mysqldump -u root -p --all-databases > full_backup.sql
   ```

2. **配置 Linux 環境的 MySQL**:
   
   編輯 MySQL 配置文件（通常為 `/etc/mysql/my.cnf` 或 `/etc/my.cnf`）:
   ```
   [mysqld]
   lower_case_table_names=1
   ```

3. **初始化新的數據目錄**:
   ```bash
   # 確保 MySQL 服務停止
   sudo service mysql stop
   
   # 清空數據目錄（謹慎操作！）
   sudo rm -rf /var/lib/mysql/*
   
   # 重新初始化數據目錄
   sudo mysqld --initialize
   
   # 啟動 MySQL
   sudo service mysql start
   ```

4. **導入備份數據**:
   ```bash
   mysql -u root -p < full_backup.sql
   ```

### 在 Docker 環境中配置

使用 Docker 時，需要在容器初始化前設置參數：

```yaml
# docker-compose.yml 示例
services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: your_password
      MYSQL_DATABASE: your_database
    volumes:
      - ./mysql/my.cnf:/etc/mysql/conf.d/my.cnf
    command: --lower-case-table-names=1
```

確保 `my.cnf` 文件內容為：
```
[mysqld]
lower_case_table_names=1
```

## 最佳實踐與注意事項

1. **開發與生產環境一致性**:
   - 確保開發環境與生產環境使用相同的 `lower_case_table_names` 設置
   - 推薦在所有環境中統一使用 `lower_case_table_names=1`

2. **參數修改時機**:
   - 此參數只能在初始化數據目錄時設置
   - 已運行的數據庫無法直接修改，必須備份數據、重新初始化、再導入數據

3. **SQL 查詢編寫建議**:
   - 當使用 `lower_case_table_names=1` 時，始終以小寫形式編寫表名
   - 盡量避免在表名中使用混合大小寫

4. **避免常見錯誤**:
   - 不要在 Linux 系統上嘗試使用 `lower_case_table_names=2`
   - 不要在已初始化的數據庫上直接修改配置文件中的此參數值

## 故障排除

如果遇到以下錯誤：

```
[ERROR] [MY-010095] [Server] Failed to access directory for --secure-file-priv. 
The value is set to MySQL server's "datadir".
```

這通常表示 MySQL 數據目錄權限不正確或參數設置衝突。確保：

1. 數據目錄具有正確的權限和所有者
2. 在全新的數據目錄上初始化 MySQL

## 結論

在 Linux 環境中，`lower_case_table_names` 參數的選擇直接影響到數據庫的行為和跨平台兼容性。對於跨平台應用，推薦使用 `lower_case_table_names=1`，這是唯一在所有平台上都具有一致行為的設置。將此參數視為初始化時的關鍵決策，而非可隨時調整的配置。