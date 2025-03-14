<!-- @format -->

## DB

````sql
mysql -u root -p

-- Создаем базу данных, если её нет
CREATE DATABASE IF NOT EXISTS aml;

-- Используем созданную базу данных
USE aml;

-- Создаем таблицу пользователей
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS wallets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_address VARCHAR(255) NOT NULL UNIQUE,
    isSelect BOOLEAN NOT NULL DEFAULT FALSE,
    chain VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создаем таблицу app_info (примерная структура, уточни, если нужно)
CREATE TABLE IF NOT EXISTS app_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    key_name VARCHAR(255) NOT NULL UNIQUE,
    value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
DESC app_info;

ALTER TABLE app_info
    ADD COLUMN project_fullName VARCHAR(255) NOT NULL DEFAULT '',
    ADD COLUMN project_shortName VARCHAR(255) NOT NULL DEFAULT '',
    ADD COLUMN project_creationYear INT NOT NULL DEFAULT 0,
    ADD COLUMN company_name VARCHAR(255) NOT NULL DEFAULT '',
    ADD COLUMN company_address VARCHAR(255) NOT NULL DEFAULT '',
    ADD COLUMN tgSupportLink VARCHAR(255) NOT NULL DEFAULT '';

-- Создаем таблицу сообщений бота (если нужно)
CREATE TABLE IF NOT EXISTS bot_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (login, password)
VALUES ('admin', MD5(CONCAT('aml', MD5('admin'), '2024')))
ON DUPLICATE KEY UPDATE password = VALUES(password);```


```bash
cd api
php -S 127.0.0.1:8000
````

## WALLETS API

### GET

/api.php?source=wallets&method=get Content-Type: application/json

```json
[
    {
        "id": 1,
        "wallet_address": "0x123abc...",
        "isSelect": true,
        "chain": "Ethereum",
        "created_at": "2025-03-14 10:00:00"
    },
    {
        "id": 2,
        "wallet_address": "0x456def...",
        "isSelect": false,
        "chain": "BSC",
        "created_at": "2025-03-14 11:00:00"
    }
]
```

### POST

/api.php?source=wallets&method=add Content-Type: application/json

```json
{
    "wallet_address": "0x123abc...",
    "isSelect": true,
    "chain": "Ethereum"
}
```

### POST

/api.php?source=wallets&method=edit Content-Type: application/json

```json
{
    "id": 1,
    "column": "isSelect",
    "value": false
}
```
