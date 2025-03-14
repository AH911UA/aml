<?php

ini_set('log_errors', 'On');
ini_set('error_log', './error_log.txt');

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once './config/db.php';
include_once './objects/data.php';
include_once './objects/user.php';
include_once './objects/bot.php';

$database = new Database();
$db = $database->getConnection();
$data = new Data($db);
$user = new User($data);
$bot = new Bot($data);

if (empty($_GET['source'])) {
    exit(0);
}

if ($_GET['source'] === 'app_info') {
    if ($_GET['method'] === 'get') {
        echo json_encode($data->get($_GET['source']));
    } else if ($_GET['method'] === 'set') {
        $requestData = json_decode($_POST['data']);
        echo json_encode($data->edit($_GET['source'], $requestData->id, $requestData->key, $requestData->value));
    }
} else if ($_GET['source'] === 'users') {
    if ($_GET['method'] === 'login') {
        $requestData = json_decode($_POST['data']);
        echo json_encode($user->checkUser($requestData->login, $requestData->password));
    } else if ($_GET['method'] === 'check') {
        $requestData = json_decode($_POST['data']);
        echo json_encode($user->checkToken($requestData->login, $requestData->token));
    }
} else if ($_GET['source'] === 'bot') {
    if ($_GET['method'] === 'sendMessage') {
        $requestData = json_decode($_POST['data']);
        echo json_encode($bot->sendMessage($requestData->message));
    }
} else if ($_GET['source'] === 'wallets') {
    if ($_GET['method'] === 'get') {
        echo json_encode($data->getWallets());
    } else if ($_GET['method'] === 'add') {
        $requestData = json_decode($_POST['data']);
        echo json_encode($data->addWallet($requestData->wallet_address, $requestData->isSelect, $requestData->chain));
    } else if ($_GET['method'] === 'edit') {
        $requestData = json_decode($_POST['data']);
        echo json_encode($data->editWallet($requestData->id, $requestData->column, $requestData->value));
    }
}
