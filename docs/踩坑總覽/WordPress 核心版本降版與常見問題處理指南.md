# WordPress 核心版本降版與常見問題處理指南

## 前言
WordPress 在每次大版本更新後，都有可能出現套件不相容、功能異常或效能變慢的情況。當更新後出現問題，降版成為必須的救援手段。

---

## 1. WordPress 降版執行步驟

### 步驟1：備份現有綱要
- 備份綱要檔
- 備份 wp-content/
- 備份資料庫


### 步驟2：安裝降版軟體

推薦使用安全信賴的外掛「WP Downgrade | Specific Core Version」

安裝流程：
```bash
WordPress 後台 > 外掛 > 新增 > 搜尋 "WP Downgrade"
```
- 安裝後在設定頁面填入要降版的 WordPress 版本（例如 6.7）
- 依持指示下載與完成降版


### 步驟3：重新啟動綱要檔與外掛驗測
- 確認綱要效能回復正常
- 確認外掛不再發生錯誤

---

## 2. 降版過程中的常見錯誤與處理

### 錯誤：檔案權限不足

**現象：** 降版時無法覆蓋新檔案，報錯訊息。

**解決：**
- 確保 WordPress 目錄和內部所有檔案屬於 webserver 用戶（如 www-data）
- 可使用命令行調整：
```bash
sudo chown -R www-data:www-data /var/www/html
```
(根據你實際使用路徑調整)


### 錯誤：降版後外掛或綱要當檔失效

**現象：** 部分外掛不再相容，綱要內容錯亂

**解決：**
- 確認外掛版本相容，必要時可回歸舊版
- 手動調整綱要內容，確保內容統一。


---

## 3. 注意事項

- 降版前必須備份！避免數據違失
- 備份不只限於資料庫，還包括 wp-content/ 和 wp-config.php
- 降版後該經過清楚綱要驗測，確保綱要正常。


---

## 4. 結論

WordPress 核心版本降版是一個故障處理的工具，正確使用可以快速恢復系統維守符合標準，避免因版本更新造成滴結故障。

