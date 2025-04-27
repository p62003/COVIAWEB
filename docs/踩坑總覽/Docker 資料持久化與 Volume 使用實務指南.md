# Docker 資料持久化與 Volume 使用實務指南

## 前言
Docker 通常執行自身是短暇存的，所以保存數據需要使用 Volume 轉移至外部儲存器，以確保 container 重啟或重建時，資料不會丢失。

---

## 1. Docker Volume 執行概念

- Volume 是 Docker 系統管理的外部儲存區，與 container 生命週期相等成為獨立管理。
- Volume 可以被各種容器共享，或與 container 維持掛載關係，卻不會因為 container 刪除而消失。

---

## 2. Volume 使用實例

### docker-compose.yml 執行 volume 掛載

```yaml
services:
  db:
    image: mysql:8.0
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

解釋：
- `db_data` 是定義好的 named volume
- `/var/lib/mysql` 是 MySQL 預設儲存資料的路徑


### Docker 結束與 volume 持續性

- 执行 `docker-compose down`：**container 會被刪除，但 volume 不會被刪除**，資料仍存在
- 执行 `docker-compose down -v`：**container 和 volume 同時刪除**，資料消失


---

## 3. 完整保護流程

1. 開發階段：使用 volume 儲存數據
2. 變更綱要結構：新階段操作 docker-compose 前，確認 volume 已掛載
3. 部署時：仅進行 `docker-compose pull && docker-compose up -d --build`，不需要刪除 volume

---

## 4. 結論

正確使用 Docker Volume ，可以大量降低 container 重啟、工程更新時資料違失的風險，並升高部署效率。

