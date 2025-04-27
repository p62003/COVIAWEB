# WP-CLI 安裝、使用與常見錯誤處理指南

## 前言
WP-CLI 是 WordPress 官方提供的命令列工具，可以使用简潔的 CLI 指令，總算、維護、變更 WordPress 系統。

---

## 1. WP-CLI 安裝流程

### 手動下載與安裝
```bash
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```

### 確認安裝成功
```bash
wp --info
```

---

## 2. WP-CLI 執行基礎

### 執行基本指令：
```bash
wp core update
wp plugin install plugin-name --activate
wp theme install theme-name --activate
wp user update user-name --user_pass="newpassword"
```

### 在 Docker 容器內執行：
如果是在 Docker container 內操作，需加上 `--allow-root` 參數：
```bash
wp core update --allow-root
```

---

## 3. 常見錯誤處理

### 錯誤：不允許以 root 身份執行

**原因：** WP-CLI 默認為了保護系統安全，不允許 root 身份執行。

**解決：** 加上 `--allow-root`：
```bash
wp <command> --allow-root
```

---

## 4. 結論

WP-CLI 可大幅減簡 WordPress 管理操作，但也需注意環境設定與安全操作，特別是在容器環境下，必須應用正確參數以避免錯誤。

