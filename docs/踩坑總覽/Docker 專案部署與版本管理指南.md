# Docker 專案部署與版本管理指南

## 前言
Docker 不僅只是啟動容器，正確的部署與版本管理流程能夠確保資料不違失，系統保持清潔，操作效率最大化。

---

## 1. 執行 Docker 部署基礎理解

- **container 是短暇存的，volume 是持久存儲的**，所以保存資料要依靠 volume
- **程式代碼修改，只需要 pull 新代碼，重新 build container**，不需重裝數據庫

---

## 2. 正確部署流程

1. 本地開發：修改 API / WP 等代碼
2. git commit & push 至主個 Git repo
3. VPS SSH login
4. cd /path/to/project
5. 执行下列流程：

```bash
git pull
docker-compose down
docker-compose up -d --build
```

- **git pull** ：拉取新代碼
- **docker-compose down** ：先關閉 container，保持 volume 不消失
- **docker-compose up -d --build** ：重新建立最新版本容器並背景啟動


---

## 3. 解決常見誤解

- **錯誤：每次部署都要清空數據庫**
  - 正確：只要保持 volume，系統資料自動維持

- **錯誤：修改綱要必須刪掉全部 container**
  - 正確：只需要 docker-compose down，並重新 build即可

- **注意：若利用 docker-compose down -v，會消除 volume，適合要重作的場景，非普通部署手法**

---

## 4. 結論

記住：部署 Docker 專案時，不要輕易操作 volume，也不需要重置數據庫，只要有經過正確掛載 volume，能夠最大線索化操作效率，並確保資料安全不違失。

