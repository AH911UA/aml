<?php

class User
{
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function checkUser($login, $password)
    {
        $users = $this->data->get('users');

        foreach ($users as $user) {
            if (
                $user['login'] === $login &&
                $user['password'] === $this->hashPassword($password)
            ) {
                return $this->getToken($user['login'], $user['password'])[0];
            } else {
                return 'ERROR';
            }
        }
    }

    public function checkToken($login, $token)
    {
        $users = $this->data->get('users');

        foreach ($users as $user) {
            if ($user['login'] === $login) {
                for ($i = 0; $i < 5; $i++) {
                    if ($token === $this->getToken($login, $user['password'])[$i]) {
                        return 'OK';
                    }
                }
            }
        }
    }

    public function getToken($login, $password)
    {
        $tmp = [];

        for ($i = 0; $i < 5; $i++) {
            array_push($tmp, md5('mad' . $password . date('d.m.y', strtotime(date('d.m.y') . " -$i  day")) . 'aml' . $login . 'connect'));
        }

        return $tmp;
    }

    function hashPassword($password)
    {
        return md5('aml' . md5($password) . '2024');
    }
}
