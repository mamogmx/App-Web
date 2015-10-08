<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of utils
 *
 * @author mamo
 */
class utils {
    static function getDb($params=Array()){
        $dbname=($params["dbname"])?($params["dbname"]):(DB_NAME);
        $dbhost=($params["dbhost"])?($params["dbhost"]):(DB_HOST);
        $dbport=($params["dbport"])?($params["dbport"]):(DB_PORT);
        $dbuser=($params["dbuser"])?($params["dbuser"]):(DB_USER);
        $dbpwd=($params["dbpwd"])?($params["dbpwd"]):(DB_PWD);
        $dsn = sprintf('pgsql:dbname=%s;host=%s;port=%s',$dbname,$dbhost,$dbport);
        $conn = new PDO($dsn, $dbuser, $dbpwd);
        return $conn;
    }
}
