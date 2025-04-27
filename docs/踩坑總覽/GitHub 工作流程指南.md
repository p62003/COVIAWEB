# GitHub 完整工作流程指南 (修訂版)

## 適用於無程式設計經驗的知識型專案

本指南專為以下人群設計：
- 知識型文檔專案管理者
- 零程式設計經驗的使用者
- 需要正確、安全且可持續維護流程的團隊

**重要理念：每一步都先檢查，再執行！**

---

## 📋 目錄

1. [初次建立 Repository (專案庫)](#1-初次建立-repository-專案庫)
2. [初次建立 GitHub Pages](#2-初次建立-github-pages)
3. [後續更新 Repository 內容](#3-後續更新-repository-內容)
4. [後續更新 GitHub Pages](#4-後續更新-github-pages)
5. [緊急狀況處理指南](#5-緊急狀況處理指南)
6. [良好習慣與安全作業](#6-良好習慣與安全作業)

---

## 1. 初次建立 Repository (專案庫)

### ✅ 步驟流程 (含檢查步驟)

1. **登入 GitHub 並建立新專案**
   - 點選右上角「+」符號，選擇「New repository」
   - 或直接前往: https://github.com/new

2. **基本設定 (全部都要設定)**
   - Repository 名稱：使用簡單英文小寫加連字符，例如 `my-knowledge-docs`
   - 選擇「Public」(公開)
   - 勾選「Add a README file」(必要)
   - 選擇「LICENSE」：建議選擇 MIT License (最常用且開放)
   - 點擊「Create repository」

3. **複製 Repository 網址**
   - 建立完成後，點擊綠色「Code」按鈕
   - 複製顯示的 HTTPS 網址，如：`https://github.com/你的帳號/my-knowledge-docs.git`

4. **本機設定連結 (每步都要檢查)**

   **方法 1：從全新資料夾開始**
   ```bash
   # 步驟 1：建立並進入專案資料夾
   mkdir my-knowledge-docs
   cd my-knowledge-docs

   # 步驟 2：初始化 Git
   git init

   # 步驟 3：設定遠端連結 (請替換成你的 GitHub 專案網址)
   git remote add origin https://github.com/你的帳號/my-knowledge-docs.git

   # 步驟 4：檢查遠端連結是否正確 (檢查步驟)
   git remote -v
   # 應該顯示：
   # origin  https://github.com/你的帳號/my-knowledge-docs.git (fetch)
   # origin  https://github.com/你的帳號/my-knowledge-docs.git (push)

   # 步驟 5：確認分支名稱為 main
   git branch -M main

   # 步驟 6：檢查當前分支 (檢查步驟)
   git branch
   # 應該顯示：
   # * main

   # 步驟 7：拉取遠端內容
   git pull origin main

   # 步驟 8：檢查檔案狀態 (檢查步驟)
   git status
   # 應該顯示 README.md 和 LICENSE 檔案

   # 步驟 9：新增你的檔案
   # (將你的檔案複製到此資料夾)

   # 步驟 10：將檔案加入追蹤
   git add .

   # 步驟 11：檢查將提交的檔案 (檢查步驟)
   git status
   # 應該列出你所有的檔案，確認無誤

   # 步驟 12：建立初始提交
   git commit -m "初始提交"

   # 步驟 13：上傳到 GitHub
   git push -u origin main
   ```

   **方法 2：直接下載到本機 (更簡單且更安全)**
   ```bash
   # 步驟 1：複製專案到本機
   git clone https://github.com/你的帳號/my-knowledge-docs.git

   # 步驟 2：進入專案資料夾
   cd my-knowledge-docs

   # 步驟 3：檢查遠端設定 (檢查步驟)
   git remote -v
   # 應該顯示：
   # origin  https://github.com/你的帳號/my-knowledge-docs.git (fetch)
   # origin  https://github.com/你的帳號/my-knowledge-docs.git (push)

   # 步驟 4：檢查分支 (檢查步驟)
   git branch
   # 應該顯示：
   # * main

   # 步驟 5：新增你的檔案
   # (將你的檔案複製到此資料夾)

   # 步驟 6：將檔案加入追蹤
   git add .

   # 步驟 7：檢查將提交的檔案 (檢查步驟)
   git status
   # 應該列出你所有的檔案，確認無誤

   # 步驟 8：建立初始提交
   git commit -m "初始提交"

   # 步驟 9：上傳到 GitHub
   git push -u origin main
   ```

### 🔍 指令解釋和檢查指令

| 檢查指令 | 用途說明 | 預期結果 |
|------|----------|----------|
| `git remote -v` | 查看遠端連結設定 | 顯示 origin 及你的 GitHub 網址 |
| `git branch` | 查看目前的分支 | 顯示 `* main` (星號表示當前分支) |
| `git status` | 查看工作目錄狀態 | 顯示已修改但未加入暫存的檔案 |
| `git log --oneline` | 查看提交歷史 | 顯示所有提交記錄的簡短版本 |

| 操作指令 | 用途說明 |
|------|----------|
| `mkdir 資料夾名稱` | 建立資料夾 |
| `cd 資料夾名稱` | 進入資料夾 |
| `git init` | 將目前的資料夾初始化為 Git 專案 |
| `git remote add origin URL` | 將本地專案與 GitHub 上的遠端專案連結 |
| `git branch -M main` | 確保使用 main 作為主要分支名稱 |
| `git pull origin main` | 從 GitHub 下載最新檔案 |
| `git add .` | 將所有檔案加入追蹤清單 |
| `git commit -m "訊息"` | 建立一個紀錄點，並附上說明訊息 |
| `git push -u origin main` | 將提交的內容上傳到 GitHub，同時設定上游追蹤 |
| `git clone URL` | 下載整個 GitHub 專案到本機 |

### ⚠️ 常見問題與預防方法

1. **「remote origin already exists」(遠端來源已存在)**
   
   **預防方法**: 先檢查再設定
   ```bash
   # 先檢查是否已有遠端設定
   git remote -v
   
   # 如有錯誤的遠端設定，移除它
   git remote remove origin
   
   # 設定正確的遠端
   git remote add origin https://github.com/你的帳號/my-knowledge-docs.git
   
   # 再次確認
   git remote -v
   ```

2. **「push 被拒絕」**
   
   **預防方法**: 先拉取再推送
   ```bash
   # 先拉取最新變更
   git pull origin main
   
   # 如果沒有衝突，再推送
   git push origin main
   ```

3. **「找不到 git 指令」**
   
   **預防方法**: 先確認安裝
   - Windows: 下載並安裝 Git for Windows: https://git-scm.com/download/win
   - Mac: 在終端機中輸入 `git --version`，若未安裝會引導你安裝

---

## 2. 初次建立 GitHub Pages

### ✅ 步驟流程 (通過命令列完成大部分工作)

1. **確認網站檔案就緒**
   
   ```bash
   # 進入專案資料夾
   cd my-knowledge-docs
   
   # 確認有 index.html 檔案或必要的網站檔案
   ls
   
   # 確認 index.html 存在於根目錄或 /docs 或 /build 資料夾
   # 如果你使用的是 /docs 資料夾，請確認:
   ls docs
   ```

2. **透過 Git 設定 GitHub Pages (UI 操作)**
   
   這一步必須在 GitHub 網頁完成：
   - 前往 https://github.com/你的帳號/my-knowledge-docs/settings/pages
   - 在「Source」區域：
     - 選擇「Deploy from a branch」
     - Branch 選擇「main」
     - 資料夾選擇「/ (root)」或「/docs」或「/build」(取決於你的網站檔案位置)
     - 點擊「Save」

3. **驗證部署設定**
   
   ```bash
   # 檢查專案設定
   curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs | grep has_pages
   # 應顯示: "has_pages": true,
   ```

4. **等待部署並測試**
   
   ```bash
   # 等待約 1-5 分鐘後，測試網站是否可訪問
   # 典型的網址格式：https://你的帳號.github.io/my-knowledge-docs/
   
   # 你可以使用瀏覽器開啟，或在命令列中用:
   curl -I https://你的帳號.github.io/my-knowledge-docs/
   # 如果網站有效，應回傳 HTTP/2 200
   ```

### 🔍 設定檢查指令

| 指令 | 用途說明 | 預期結果 |
|------|------|------|
| `ls` | 列出目前資料夾中的檔案 | 應該包含 index.html 或網站主要檔案 |
| `ls docs` | 檢查 docs 資料夾內容 | 如使用 docs 設定，應該包含 index.html |
| `curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs` | 檢查專案 API 資訊 | 包含 GitHub Pages 相關設定 |
| `curl -I https://你的帳號.github.io/my-knowledge-docs/` | 檢查網站是否可訪問 | HTTP/2 200 表示可訪問 |

### ⚠️ 常見問題與預防方法

1. **「找不到 Pages 設定」**
   
   **預防方法**: 確認專案為公開
   ```bash
   # 檢查專案是否為公開
   curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs | grep private
   # 應顯示: "private": false,
   
   # 如果是私有專案，需要修改為公開
   # (需在 GitHub 網頁上操作:
   # Settings > 將 "Change repository visibility" 改為 Public)
   ```

2. **「網站顯示 404」**
   
   **預防方法**: 確認檔案結構，強制重新部署
   ```bash
   # 確認有 index.html 檔案
   ls
   # 或檢查 docs 資料夾
   ls docs
   
   # 添加空的提交觸發重新部署
   git commit --allow-empty -m "觸發 GitHub Pages 重新部署"
   git push origin main
   ```

3. **「網站內容是 README 而非網頁」**
   
   **預防方法**: 確認有正確的 index.html
   ```bash
   # 檢查根目錄或設定的資料夾中是否有 index.html
   ls
   # 或
   ls docs
   
   # 如果沒有，創建一個簡單的 index.html
   echo '<html><body><h1>我的網站</h1></body></html>' > index.html
   
   # 提交並推送
   git add index.html
   git commit -m "添加 index.html"
   git push origin main
   ```

---

## 3. 後續更新 Repository 內容

### ✅ 步驟流程 (先檢查再修改)

1. **作業前準備 (每次都必須執行)**
   
   ```bash
   # 進入專案資料夾
   cd my-knowledge-docs
   
   # 檢查遠端設定 (檢查步驟)
   git remote -v
   # 確認是正確的 GitHub 專案
   
   # 檢查當前分支 (檢查步驟)
   git branch
   # 確認是在 main 分支
   
   # 檢查工作區是否乾淨 (檢查步驟)
   git status
   # 應該顯示 "working tree clean" 或 "nothing to commit"
   
   # 若有未提交的修改，先決定如何處理，**提交**或者**丟棄**: 
   # 1-1. 提交這些修改: git add . git commit -m "提交之前的修改" 
   # 1-2. 或丟棄這些修改: git reset --hard HEAD
   
   # 獲取最新代碼
   git pull origin main
   
   # 檢查是否拉取成功 (檢查步驟)
   git log --oneline -n 1
   # 顯示最新的一筆提交記錄
   ```

2. **進行檔案修改**
   
   ```bash
   # 使用你喜歡的編輯器進行修改
   # 完成修改後，檢查修改的檔案
   
   # 檢查哪些檔案被修改了 (檢查步驟)
   git status
   ```

3. **預先檢查修改內容**
   
   ```bash
   # 查看具體修改了什麼 (檢查步驟)
   git diff
   
   # 如果確認修改無誤，繼續下一步
   # 如果發現問題，可以回到編輯器修正
   ```

4. **提交變更 (分段進行)**
   
   ```bash
   # 如果使用 npm 構建網站（如 React、Vue 等專案）
   npm run build  # 產生網站成品
   
   # 1. 先提交文檔更新
   git add *.md *.txt *.html
   git commit -m "更新文檔內容: 描述你的修改"
   
   # 2. 再提交其他檔案
   git add .
   git commit -m "更新其他檔案: 描述你的修改"
   
   # 最後確認提交記錄 (檢查步驟)
   git log --oneline -n 3
   # 應該顯示你剛才的提交記錄
   ```

5. **推送到 GitHub (先確認後推送)**
   
   ```bash
   # 先檢查是否有新的遠端更新 (檢查步驟)
   git pull origin main
   
   # 檢查是否有合併訊息或衝突 (檢查步驟)
   git status
   
   # 如果沒有問題，推送到 GitHub
   git push origin main
   
   # 確認推送成功 (檢查步驟)
   git log --oneline -n 1
   # 應該顯示你最新的提交
   ```

### 🔄 分支衝突前的挽救程序

如果你已經修改了檔案但忘記先 push：

```bash
# 1. 先保存當前修改到臨時區
git stash

# 2. 確認已保存
git stash list
# 應該顯示你剛才的 stash 記錄

# 3-1. 拉取最新代碼 
git pull origin main
# 3-2確認最新代碼內容是否與臨時區檔案衝突，如無再繼續作業。如有則需重新調整臨時區檔案

# 4. 應用之前的修改 
git stash apply

# 5. 檢查是否有衝突
git status

# 如果有衝突，編輯衝突檔案
# 然後按正常流程 add, commit, push
```

### 🔍 關鍵檢查指令

| 檢查指令 | 用途 | 預期結果 |
|---------|------|----------|
| `git log --oneline -n 3` | 檢查最近 3 筆提交記錄 | 顯示提交 ID 和訊息 |
| `git diff` | 查看未提交的修改內容 | 顯示修改的具體內容 |
| `git stash list` | 查看臨時保存的修改 | 顯示 stash 記錄 |
| `git branch -vv` | 詳細檢查分支 | 顯示分支、最新提交和追蹤關係 |

### ⚠️ 常見問題與預防方法

1. **「已修改檔案但需要拉取新的變更」**
   
   **預防方法**: 使用 stash 避免衝突
   ```bash
   # 先保存現有修改
   git stash save "我的修改"
   
   # 拉取遠端更新
   git pull origin main
   
   # 恢復之前的修改
   git stash pop
   
   # 檢查是否有衝突
   git status
   ```

2. **「Git Pull 遇到衝突」**
   
   **預防方法**: 先確認狀態，謹慎處理
   ```bash
   # 取消當前 pull 操作
   git merge --abort
   
   # 查看本地修改
   git status
   
   # 將修改保存到獨立分支
   git checkout -b backup-changes
   git add .
   git commit -m "備份我的修改"
   
   # 回到主分支
   git checkout main
   
   # 重新拉取
   git pull origin main
   
   # 選擇性地將修改從 backup-changes 合併回來
   git checkout backup-changes -- 路徑/到/檔案.md
   ```

3. **「無法推送 - 遠端有更新」**
   
   **預防方法**: 正確的拉取-合併-推送流程
   ```bash
   # 先拉取
   git pull origin main
   
   # 解決任何衝突
   # 編輯有衝突的檔案
   
   # 加入解決的衝突檔案
   git add .
   
   # 完成合併
   git commit -m "合併遠端變更並解決衝突"
   
   # 推送
   git push origin main
   ```

---

## 4. 後續更新 GitHub Pages

### ✅ 手動確認部署步驟 (不依賴自動化)

1. **確保網站檔案正確**
   
   ```bash
   # 檢查根目錄或 docs 資料夾中是否有所有必要檔案
   ls
   # 或
   ls docs
   
   # 檢查 index.html 是否存在
   cat index.html
   # 或
   cat docs/index.html
   ```

2. **手動觸發部署**
   
   ```bash
   # 創建一個空提交來觸發部署
   git commit --allow-empty -m "手動觸發 GitHub Pages 部署"
   git push origin main
   ```

3. **監控部署狀態**
   
   通過 GitHub 網頁檢查:
   - 在專案頁面點選 Actions 頁籤
   - 查看最新的工作流程運行狀態
   
   或使用命令列:
   ```bash
   # 每隔 30 秒查詢部署狀態 (需要有 jq 工具)
   # Windows 可先安裝 jq: https://stedolan.github.io/jq/download/
   while true; do
     curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs/pages | grep -e '"status":'
     sleep 30
   done
   ```

4. **驗證部署結果**
   
   ```bash
   # 等待 3-5 分鐘後，檢查網站是否可訪問
   curl -I https://你的帳號.github.io/my-knowledge-docs/
   # 應該顯示 HTTP/2 200
   
   # 檢查首頁內容
   curl -s https://你的帳號.github.io/my-knowledge-docs/ | head -n 20
   # 應該顯示首頁 HTML 的前 20 行
   ```

### 🔍 部署檢查指令

| 檢查指令 | 用途 | 預期結果 |
|---------|------|----------|
| `curl -I URL` | 檢查網頁是否可訪問 | HTTP/2 200 (OK) |
| `curl -s URL \| head` | 查看網頁內容前幾行 | 網頁的 HTML 內容 |
| `git log --oneline -n 1` | 檢查最近的提交 | 顯示最新的提交記錄 |

### ⚠️ 常見問題與預防方法

1. **「部署後網站未更新」**
   
   **預防方法**: 清除瀏覽器快取，確認部署狀態
   ```bash
   # 檢查最新提交是否已被推送
   git log origin/main -n 1
   
   # 等待至少 5 分鐘讓部署完成
   
   # 檢查部署狀態 (UI 或 API)
   curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs/pages | grep status
   
   # 強制觸發重新部署
   git commit --allow-empty -m "強制重新部署"
   git push origin main
   ```

2. **「部署失敗」**
   
   **預防方法**: 確認檔案結構和權限
   ```bash
   # 確認 index.html 權限
   ls -la index.html
   # 或
   ls -la docs/index.html
   
   # 確認檔案結構符合 GitHub Pages 要求
   git ls-files | grep html
   
   # 檢查 GitHub Pages 設定
   curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs/pages
   ```

3. **「某些資源 404 找不到」**
   
   **預防方法**: 確認相對路徑正確
   ```bash
   # 檢查網站結構
   git ls-files
   
   # 確認 HTML 中的路徑引用
   grep -r "src=" --include="*.html" .
   grep -r "href=" --include="*.html" .
   
   # 確保路徑使用相對路徑而非絕對路徑
   # 錯誤: <img src="/images/logo.png">
   # 正確: <img src="./images/logo.png"> 或 <img src="images/logo.png">
   ```

---

## 5. 緊急狀況處理指南

### 🆘 Git 倉庫損壞情況

1. **極端情況：倉庫變得無法使用**
   
   ```bash
   # 將重要檔案備份到別的地方
   mkdir ../backup
   cp -r *.md *.html *.css *.js ../backup/
   
   # 刪除並重新克隆
   cd ..
   rm -rf my-knowledge-docs
   git clone https://github.com/你的帳號/my-knowledge-docs.git
   cd my-knowledge-docs
   
   # 檢查恢復情況
   git status
   git log --oneline
   ```

2. **嚴重衝突無法解決**
   
   ```bash
   # 放棄當前修改，完全重置
   git fetch origin
   git reset --hard origin/main
   
   # 檢查狀態
   git status
   # 應顯示 "nothing to commit, working tree clean"
   ```

3. **找回意外刪除的檔案**
   
   ```bash
   # 查找含有該檔案的最後一個提交
   git log --all -- 路徑/到/被刪檔案.md
   
   # 從該提交中恢復檔案
   git checkout 提交ID -- 路徑/到/被刪檔案.md
   
   # 確認檔案已恢復
   ls 路徑/到/
   ```

### 🆘 GitHub Pages 嚴重問題

1. **部署了錯誤的內容**
   
   ```bash
   # 恢復到之前正確的版本
   git log --oneline
   # 找到正確版本的提交 ID
   git reset --hard 提交ID
   git push -f origin main
   # 警告：此操作將覆蓋遠端倉庫！
   ```

2. **GitHub Pages 設定丟失**
   
   ```bash
   # 確認專案仍然存在
   curl -s https://api.github.com/repos/你的帳號/my-knowledge-docs | grep name
   
   # 通過 UI 重新設定 GitHub Pages
   # (這一步必須在 GitHub 網站上操作)
   
   # 觸發新的部署
   git commit --allow-empty -m "重新啟用 GitHub Pages"
   git push origin main
   ```

3. **GitHub 帳號/密碼問題**
   
   ```bash
   # 檢查當前認證方式
   git config --get remote.origin.url
   
   # 更新為使用 Personal Access Token 的 URL
   git remote set-url origin https://你的TOKEN@github.com/你的帳號/my-knowledge-docs.git
   
   # 檢查設定是否成功
   git pull
   ```

### ⚠️ 嚴重警告：衝突風險區

**以下操作極其危險，只在萬不得已時使用：**

1. **強制推送 (`git push -f`)**
   - 會覆蓋遠端所有更改，包括其他人的貢獻
   - 可能造成無法恢復的資料損失
   - 永遠不要在協作專案中使用，除非你絕對確定後果

2. **重置已推送的提交 (`git reset --hard` + `git push -f`)**
   - 會徹底刪除提交歷史
   - 會讓其他協作者的本地倉庫陷入衝突
   - 只在私人專案中萬不得已時使用

3. **修改提交歷史 (`git rebase -i`)**
   - 改變已存在的提交會創建新的 ID
   - 當推送後會導致歷史不一致
   - 在推送前謹慎使用，推送後絕不使用

---

## 6. 良好習慣與安全作業

### 📝 事前準備習慣

1. **每日工作前的「安全檢查」流程**
   
   ```bash
   # 檢查當前目錄
   pwd
   # 確認是正確的專案
   
   # 檢查當前分支
   git branch
   # 應該顯示 * main
   
   # 檢查遠端連接
   git remote -v
   # 確認指向正確的 GitHub 專案
   
   # 更新遠端資訊
   git fetch origin
   
   # 查看本地是否落後於遠端
   git status -uno
   # 如果顯示 "Your branch is behind"，需先更新
   
   # 完整更新本地儲存庫
   git pull origin main
   ```

2. **定期備份重要內容**
   
   ```bash
   # 創建日期標記的備份資料夾
   mkdir -p ~/backups/my-knowledge-docs-$(date +%Y%m%d)
   
   # 複製重要檔案到備份資料夾
   cp -r ./*.md ./*.html ~/backups/my-knowledge-docs-$(date +%Y%m%d)/
   
   # 或壓縮整個專案做備份
   cd ..
   tar -czvf ~/backups/my-knowledge-docs-$(date +%Y%m%d).tar.gz ./my-knowledge-docs
   cd my-knowledge-docs
   ```

3. **提交前的自我檢查清單**
   - 運行 `git diff` 確認所有變更合理
   - 確保不要提交包含密碼的檔案
   - 確認不要提交過大的檔案（如影片、大圖片等）
   - 寫清楚有意義的提交訊息

### 🔐 密碼與敏感資訊管理

1. **永遠不要儲存在 Git 中的內容**
   - 密碼、API 金鑰
   - 個人身份資訊
   - 授權憑證
   - 資料庫連接字串

2. **配置 `.gitignore` 檔案**
   
   ```bash
   # 創建或編輯 .gitignore 檔案
   nano .gitignore
   
   # 添加常見應忽略的類型
   .env
   config/secrets.yml
   *.log
   node_modules/
   .DS_Store
   
   # 保存並提交 .gitignore
   git add .gitignore
   git commit -m "更新 .gitignore 規則"
   git push origin main
   ```

3. **檢查是否意外提交了敏感資訊**
   
   ```bash
   # 搜索敏感詞
   git grep -i "password\|token\|secret\|key"
   
   # 如果找到不應該存在的敏感資訊，請參考清除歷史的步驟
   # 但這非常危險，最好尋求專業幫助
   ```

### 🧠 團隊協作的安全守則

1. **建立溝通機制**
   - 在修改前通知團隊成員
   - 建立專門的群組聊天或通訊工具頻道
   - 每日更新目前工作項目

2. **分工與權限管理**
   - 明確劃分職責與權限
   - 避免多人同時修改同一個檔案
   - 使用 GitHub Issues 追蹤任務

3. **防止衝突的核心規則**
   
   ```
   黃金法則：修改前必定先拉取最新版本
   ===============================
   
   每一次工作前的基本流程：
   1. git pull origin main
   2. [進行修改]
   3. git add .
   4. git commit -m "清楚的訊息"
   5. git pull origin main（再次拉取確保沒有新變化）
   6. git push origin main
   
   永遠不要跳過任何步驟！
   ```

### 📋 常見問題解決流程表

| 錯誤訊息 | 原因 | 安全解決步驟 |
|---------|------|-------------|
| `fatal: not a git repository` | 不在 Git 專案資料夾內 | 使用 `cd` 進入正確資料夾 |
| `fatal: remote origin already exists` | 遠端已經設定 | 使用 `git remote -v` 檢查，再使用 `git remote remove origin` 移除後重設 |
| `error: failed to push some refs` | 遠端有更新未拉取 | 先執行 `git pull origin main`，解決衝突後再推送 |
| `CONFLICT (content): Merge conflict in [檔案]` | 本地和遠端修改衝突 | 開啟檔案，尋找並解決 `<<<<<<<`, `=======`, `>>>>>>>` 標記的部分 |
| `fatal: refusing to merge unrelated histories` | 本地與遠端歷史不相關 | 創建新目錄，重新 `git clone` |
| `You are in 'detached HEAD' state` | 不在正常分支上 | 執行 `git checkout main` 返回主分支 |

### 🚫 絕對避免的危險操作

1. **不懂就用的危險指令**
   - `git push -f` (強制推送)
   - `git reset --hard` (硬重置)
   - `git rebase` (重整歷史)
   - `git clean -fd` (刪除未追蹤檔案)

2. **不理解就確認的錯誤行為**
   - 看到錯誤訊息就盲目複製網路上的解決方案
   - 不理解指令的後果就執行
   - 遇到衝突直接接受所有當前或所有傳入變更

3. **無效率的工作方式**
   - 長時間不提交變更
   - 一次提交大量不相關的變更
   - 提交訊息毫無意義 (如 "update", "fix")

---

## 🌟 結論

### 成功使用 GitHub 的四個核心原則

1. **檢查先於行動**
   - 每個指令前，先用對應的檢查指令確認狀態
   - 理解當前處於什麼狀態再進行下一步

2. **頻繁小量提交**
   - 完成一個小功能就提交一次
   - 提交訊息清晰描述做了什麼

3. **以預防代替解決**
   - 寧可多檢查幾步，也不要事後解決麻煩
   - 養成良好習慣比學習如何修復錯誤更重要

4. **備份是最後的安全網**
   - 定期將重要內容備份到 Git 之外的地方
   - 大的變更前，先確保有備份

### 日常操作簡化流程

```
📝 日常工作循環 (貼在桌上提醒自己)
------------------------------
1. 開始前: git pull           [拉取最新]
2. 修改檔案                   [做你的工作]
3. 檢查: git status           [確認修改了什麼]
4. 提交: git add + git commit [記錄變更]
5. 再次拉取: git pull         [確保無衝突]
6. 推送: git push             [分享你的工作]
7. 確認: 在 GitHub 上檢查      [確認上傳成功]
```

---

## 📊 GitHub 工作流程圖

```
+------------------+     +------------------+     +--------------------+     +-------------------+
| 1. 檢查和更新    |     | 2. 編輯和修改    |     | 3. 檢查並提交      |     | 4. 確認並推送     |
| git pull         | --> | 編輯器修改檔案   | --> | git status         | --> | git pull          |
| git status       |     | 確認檔案存在     |     | git diff           |     | git push          |
+------------------+     +------------------+     | git add            |     | 檢查網站更新      |
                                                  | git commit         |     +-------------------+
                                                  +--------------------+
                                                           |
                                                           v
                                                  +--------------------+
                                                  | 如有衝突:          |
                                                  | 謹慎修復衝突部分   |
                                                  | git add            |
                                                  | git commit         |
                                                  +--------------------+
```

---

🔄 **金科玉律**：先拉取、小提交、勤檢查、常備份！