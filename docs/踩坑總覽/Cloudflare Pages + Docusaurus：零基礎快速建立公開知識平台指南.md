# Cloudflare Pages + Docusaurus：零基礎快速建立公開知識平台指南

## 📚 專案目標與背景

- **目的**：將過去問題整理成對外開源的知識型文檔，幫助零編程背景的讀者。
- **基本要求**：
  - 結果必須正確、符合實際情況，不做理論性補全。
  - 可直接閱讀並操作，不依賴原始專業知識。
- **目標平台**：以 Docusaurus 生成靜態網站，並使用 Cloudflare Pages 進行免費全球部署。

---

## 🔥 為什麼選擇 Cloudflare Pages + Docusaurus？

| 比較項目 | Cloudflare Pages + Docusaurus 優勢 |
|:--|:--|
| 成本 | 完全免費（部署靜態網站無流量限制） |
| 難易度 | 只需基本指令操作，符合零基礎使用者 |
| 維護負擔 | 更新文檔只需 Git 推送，無需手動部署 |
| 可擴展性 | 支援未來串接 N8N Agent、Embedding、LLM前端 |
| SEO 效果 | 生成純靜態 HTML，有助於 Google 搜尋收錄 |
| 主控權 | 完全自有 GitHub 倉庫，資料自由可搬遷 |

---

## 🧠 實際社群使用經驗摘錄（來源：Reddit r/Cloudflare）

- 多位用戶回報：Cloudflare Pages 即使在高流量情況下也「**無明顯限制或額外收費**」。
- Cloudflare Pages 的免費政策是真實的，目的在於「**擴大市場佔有率**」、「吸引更多用戶使用 Cloudflare 的整體生態系」。
- 社群中認為最大的「隱性代價」是：
  - 免費用戶被當作新功能的實驗田（例如新架構、更新 rollout）
  - 部分高階功能（如 Workers、Workers KV）需要另外付費，但對純靜態網站無影響。

> 核心結論：**對純靜態文檔型網站來說，Cloudflare Pages 幾乎沒有隱藏風險。**

---

## 🏗️ Cloudflare Pages + Docusaurus 完整部署流程

### 第一步：安裝開發環境

安裝以下工具（只需一次）：
- Node.js (LTS版) ➔ [Node.js 官網](https://nodejs.org/)
- Git ➔ [Git 官網](https://git-scm.com/)
- 註冊 GitHub 帳號
- 註冊 Cloudflare 帳號

確認安裝版本：

```bash
node -v
npm -v
git --version
```

---

### 第二步：建立 Docusaurus 專案

1. 切換到你要建立專案的資料夾：

```bash
cd "C:\Users\RAZER\Desktop\Corvia"
```

2. 建立 Docusaurus 專案：

```bash
npx create-docusaurus@latest my-website classic
```

3. 選擇 JavaScript（不要選 TypeScript）。

4. 進入專案資料夾：

```bash
cd my-website
```

5. 啟動本地預覽伺服器：

```bash
npm start
```

打開 `http://localhost:3000`，確認網站正常。

---

### 第三步：編輯文檔內容

- 修改 `/docs/` 資料夾下的 `.md` 文件撰寫內容。
- 修改 `docusaurus.config.js` 設定網站名稱、LOGO、導航列等資訊。

---

### 第四步：推送到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的帳號/你的倉庫.git
git branch -M main
git push -u origin main
```

---

### 第五步：在 Cloudflare Pages 自動部署

1. 登入 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 點「Create Project」，選擇剛剛的 GitHub 倉庫
3. 設定建置參數：

| 項目 | 設定值 |
|:--|:--|
| Build command | `npm run build` |
| Output directory | `build` |
| Framework preset | None |

4. 按 Deploy，完成後會得到 `https://你的專案名.pages.dev` 公開網址。

---

## 📈 部署平台比較（Vercel / Netlify / Cloudflare Pages / Coolify）

| 平台 | 優點 | 缺點 | 適合 |
|:--|:--|:--|:--|
| **Cloudflare Pages** | 免費、無流量上限、全球CDN、易部署 | 不支援 Server-side API | 純靜態文檔型網站（推薦✅） |
| **Vercel** | 自動化部署方便，模板多 | 流量與互動超過後費用暴增 | 小型快速啟動OK，長期成本高 |
| **Netlify** | 靜態站友好，免費版佛心 | 免費額度偏小，高流量需升級 | 小型至中型靜態站可考慮 |
| **Coolify（自架）** | 完全控制、可部署前後端、成本低 | 需要懂Docker與伺服器管理 | 長期經營、自控需求高者 |

---

## 🔥 最佳部署策略建議

| 階段 | 建議部署方式 |
|:--|:--|
| 初期（文檔公開分享） | Cloudflare Pages免費部署 |
| 中期（開始Embedding問答） | 保持Cloudflare Pages前端，後端用VPS部署N8N、向量資料庫 |
| 後期（會員系統、金流等複合功能） | 全部轉移至自控 VPS（Docker-Compose + Coolify自管平台） |

---

## 🛡️ 選擇平台時的真實注意事項

- **Cloudflare Pages**：免費但只支援靜態網站，互動API必須自己架後端。
- **Vercel**：若超過免費額度，流量、Edge Middleware、API請求數會被按量計費。
- **Medium/LinkedIn/Substack 等社群平台**：不建議作為正式知識庫（SEO與控制權問題）。
- **自架 VPS（如Contabo）**：成本可控、彈性高、適合中長期發展。

---

# 🎯 簡單結論

> ✅ 如果你的目標是建立一個長期可擴展的知識型文檔網站，**Cloudflare Pages + Docusaurus 是最佳起步選擇**。

並且：
- 初期快速上線
- 中期串接 AI 問答與資料庫
- 後期完整自主管理與商業化升級

都可以無縫銜接與演進。

---
