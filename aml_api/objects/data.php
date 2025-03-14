<?php

class Data
{
    private $connection;

    public function __construct($db)
    {
        $this->connection = $db;
    }

    public function get($table)
    {
        $result = $this->connection->query("SELECT * FROM $table")->fetchAll(PDO::FETCH_ASSOC);
        return $result !== false ? $result : array();
    }

    public function edit($table, $id, $column, $value)
    {
        try {
            $checkStmt = $this->connection->prepare("SELECT COUNT(*) FROM `$table` WHERE `id` = ?");
            $checkStmt->execute([$id]);
            $exists = $checkStmt->fetchColumn();

            if ($exists) {
                $stmt = $this->connection->prepare("UPDATE `$table` SET `$column` = ? WHERE `id` = ?");
                $stmt->execute([$value, $id]);
                return ["status" => "updated", "id" => $id, "column" => $column, "value" => $value];
            } else {
                $stmt = $this->connection->prepare("INSERT INTO `$table` (`key_name`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)");
                $stmt->execute([$column, $value]);
                return ["status" => "inserted", "key" => $column, "value" => $value];
            }
        } catch (PDOException $e) {
            return ["error" => $e->getMessage()];
        }
    }

    public function getWallets()
    {
        $stmt = $this->connection->query("SELECT * FROM wallets");
        return $stmt->fetchAll(PDO::FETCH_ASSOC) ?: [];
    }

    public function addWallet($wallet_address, $isSelect, $chain)
    {
        try {
            $stmt = $this->connection->prepare("
                INSERT INTO wallets (wallet_address, isSelect, chain)
                VALUES (:wallet_address, :isSelect, :chain)
                ON DUPLICATE KEY UPDATE isSelect = :isSelect, chain = :chain
            ");
            $stmt->execute([
                ':wallet_address' => $wallet_address,
                ':isSelect' => (int) $isSelect,
                ':chain' => $chain
            ]);

            return ["status" => "success", "wallet_address" => $wallet_address];
        } catch (PDOException $e) {
            return ["error" => $e->getMessage()];
        }
    }

    public function editWallet($id, $column, $value)
    {
        try {
            $allowedColumns = ['wallet_address', 'isSelect', 'chain'];
            if (!in_array($column, $allowedColumns)) {
                return ["error" => "Invalid column"];
            }

            $stmt = $this->connection->prepare("UPDATE wallets SET `$column` = :value WHERE id = :id");
            $stmt->execute([
                ':value' => $value,
                ':id' => $id
            ]);

            return ["status" => "updated", "id" => $id, "column" => $column, "value" => $value];
        } catch (PDOException $e) {
            return ["error" => $e->getMessage()];
        }
    }

}
