<?php

class Bot
{
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function sendMessage($message)
    {
        $appInfo = $this->data->get('app_info')[0];
        $botToken = $appInfo['botToken'];
        $chatId = $appInfo['chatId'];

        file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&parse_mode=html&text=" . $message);
        return 'OK';
    }
}
