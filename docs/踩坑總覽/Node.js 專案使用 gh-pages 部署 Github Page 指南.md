# Node.js 專案使用 gh-pages 部署補充指南

對於使用 React、Vue 等 Node.js 框架的專案，可以使用 `gh-pages` 套件來簡化 GitHub Pages 的部署流程。這種方法比手動設定更簡單且可靠。

## 初次設定 gh-pages

### ✅ 步驟流程

1. **安裝 gh-pages 套件**
   
   ```bash
   # 進入專案資料夾
   cd my-knowledge-docs
   
   # 安裝 gh-pages 套件為開發依賴
   npm install --save-dev gh-pages
   
   # 檢查是否安裝成功
   npm list gh-pages
   # 應顯示安裝的 gh-pages 版本
   ```

2. **設定 package.json**
   
   ```bash
   # 開啟 package.json 檔案
   nano package.json
   ```
   
   在 package.json 中新增以下設定：
   
   ```json
   {
     "name": "my-knowledge-docs",
     "version": "1.0.0",
     
     // ... 其他原有設定 ...
     
     "homepage": "https://你的帳號.github.io/my-knowledge-docs",
     "scripts": {
       // ... 保留原有腳本 ...
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
   
   > 注意：將 `build` 改為你專案實際的建置輸出資料夾，例如：
   > - React 專案通常是 `build` 
   > - Vue 專案通常是 `dist`
   > - Docusaurus 專案通常是 `build`

3. **進行初次部署**
   
   ```bash
   # 執行部署指令
   npm run deploy
   
   # 此指令會自動執行以下步驟：
   # 1. 執行 npm run build (因為設定了 predeploy)
   # 2. 將建置結果推送到 gh-pages 分支
   ```

4. **設定 GitHub Pages 來源為 gh-pages 分支**
   
   - 前往 GitHub 專案頁面
   - 進入 Settings > Pages
   - 在 Source 區域選擇 `gh-pages` 分支和 `/ (root)` 資料夾
   - 點擊 Save

5. **檢查部署結果**
   
   ```bash
   # 等待約 2-5 分鐘，然後檢查網站是否可訪問
   curl -I https://你的帳號.github.io/my-knowledge-docs/
   # 應該顯示 HTTP/2 200
   ```

### 🔍 關鍵檢查步驟

| 檢查指令 | 用途 | 預期結果 |
|---------|------|----------|
| `npm list gh-pages` | 檢查 gh-pages 是否安裝 | 顯示安裝的版本號 |
| `git branch -a` | 檢查 gh-pages 分支是否存在 | 列表中應包含 `remotes/origin/gh-pages` |
| `curl -I https://你的帳號.github.io/my-knowledge-docs/` | 檢查網站是否可訪問 | HTTP/2 200 (OK) |

### ⚠️ 常見問題與預防方法

1. **「找不到 npm 指令」**
   
   **預防方法**: 安裝 Node.js
   - 前往 https://nodejs.org/ 下載並安裝 Node.js
   - 安裝後重新開啟命令列視窗
   - 執行 `node -v` 和 `npm -v` 確認安裝成功

2. **「部署時出現錯誤」**
   
   **預防方法**: 檢查專案設定和權限
   ```bash
   # 確認 git 使用者設定正確
   git config user.name
   git config user.email
   
   # 確認有正確的 GitHub 權限
   git push origin main --dry-run
   
   # 清除 gh-pages 快取
   rm -rf node_modules/.cache/gh-pages
   ```

3. **「部署後網站顯示 404」**
   
   **預防方法**: 確認 homepage 設定和分支選擇
   ```bash
   # 檢查 package.json 中的 homepage 設定
   grep "homepage" package.json
   
   # 確認 GitHub Pages 設定使用 gh-pages 分支
   # (需要在 GitHub 網頁上檢查)
   
   # 強制重新部署
   npm run deploy
   ```

## 後續更新 GitHub Pages (使用 gh-pages)

### ✅ 簡化流程

使用 gh-pages 套件後，部署流程大幅簡化：

```bash
# 步驟 1：確保本地代碼是最新的
git pull origin main

# 步驟 2：進行修改
# (修改你的檔案...)

# 步驟 3：提交修改到 main 分支
git add .
git commit -m "更新網站內容"
git push origin main

# 步驟 4：一鍵部署到 GitHub Pages
npm run deploy
```

### 🔍 部署過程詳解

執行 `npm run deploy` 時，以下步驟會自動完成：

1. 執行 `npm run build` (因為設定了 predeploy)
2. 建立一個臨時資料夾
3. 初始化一個 git 倉庫在臨時資料夾中
4. 將建置輸出資料夾的內容複製到臨時資料夾
5. 建立一個提交
6. 將這個提交推送到 GitHub 專案的 gh-pages 分支
7. 刪除臨時資料夾

這個過程由 gh-pages 套件自動處理，無需手動介入。

在「初次設定 gh-pages」的第 2 步「設定 package.json」中，實際上已經包含了 predeploy 的設定，但沒有特別強調或解釋它的作用。
具體來說，在那個 JSON 片段中有這兩行：
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
關於 predeploy: 這是 npm 的特殊腳本名稱，當執行 npm run deploy 時，npm 會自動先執行 predeploy 腳本，再執行 deploy 腳本。這樣設計可以確保每次部署前都先進行最新的建置，避免部署舊的內容。

### ⚠️ 注意事項

1. **必須先提交程式碼到 main 分支**
   - 確保先 `git push origin main` 再 `npm run deploy`
   - 這樣可以保持源碼和部署內容同步

2. **自訂部署訊息**
   ```bash
   npm run deploy -- -m "自訂部署訊息 [跳過 CI]"
   ```

3. **部署特定資料夾**
   - 如果建置輸出不是 `build` 資料夾，請修改 package.json：
   ```json
   "deploy": "gh-pages -d 你的輸出資料夾名稱"
   ```

## 最佳實踐

### 📝 工作流程

1. **開發-提交-部署分離**
   ```bash
   # 1. 開發並測試
   npm start  # 或 npm run dev 等開發指令
   
   # 2. 提交程式碼
   git add .
   git commit -m "更新內容"
   git push origin main
   
   # 3. 部署網站
   npm run deploy
   ```

2. **使用持續集成 (進階用戶)**
   - 設定 GitHub Actions 在推送到 main 分支時自動部署
   - 建立 `.github/workflows/deploy.yml` 檔案

### 📋 問題排解備忘錄

| 問題 | 解決方法 |
|------|----------|
| 部署後網站未更新 | 等待約 5 分鐘，檢查 gh-pages 分支是否更新 |
| 部署指令失敗 | 刪除 `node_modules/.cache/gh-pages`，重新執行 |
| 資源路徑錯誤 | 確認 package.json 中 homepage 設定正確 |
| 自訂域名消失 | 檢查是否在每次部署都會覆蓋 CNAME 檔案 |

---

## 🌟 小結

使用 gh-pages 套件後，GitHub Pages 的部署流程變得極為簡單：

1. **初次設定**：安裝套件，設定 package.json，執行初次部署
2. **日常更新**：修改內容，提交到 main，執行 `npm run deploy`

這種方法自動處理分支管理和檔案複製，讓你專注於內容創作而非部署細節。對於大多數 Node.js 框架的專案，這是最推薦的 GitHub Pages 部署方式。