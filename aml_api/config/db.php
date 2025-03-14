<?php

class Database
{
    private $host = "127.0.0.1";
    private $db_name = "aml";
    private $username = "root";
    private $password = "";

    public function getConnection()
    {
        return new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
    }
}
