<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define("BASE_DIR",  dirname(dirname(__DIR__)));
define("WEB_DIR",dirname(__DIR__));
define("APP_DIR",__DIR__);

define('DB_HOST','127.0.0.1');
define('DB_NAME','gw_savona');
define('DB_USER','postgres');
define('DB_PWD','postgres');
define('DB_PORT','5435');

require_once BASE_DIR.DIRECTORY_SEPARATOR.'lib'.DIRECTORY_SEPARATOR.'utils.class.php';
?>