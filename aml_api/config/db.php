<?php

class Database
{
    private $host = "localhost";
    private $db_name = "aml";
    private $username = "root";
    private $password = "";

    public function getConnection()
    {
        return new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
    }
}
