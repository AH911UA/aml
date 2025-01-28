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
}
