<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once "../config.php";
$result=Array(
    "success"=>0,
    "page"=>"",
    data=>Array(),
    "message"=>Array()
);
$action=$_POST["action"];

switch($action){
    case "loadPage":
        $p = $_REQUEST["page"];
        $html = "";
        $page = sprintf("%s/include/sue/%s.php",BASE_DIR,$p);
        include_once $page;
        $result["page"] = $html;
        $result["success"]=1;
        break;
    default :
        break;
}
header('Content-Type: application/json');
print json_encode($result);
?>