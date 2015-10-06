<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$result=Array(
    "success"=>0,
    "page"=>"",
    "message"=>Array()
);
$action=$_POST["action"];

switch($action){
    case "loadPage":
        break;
    default :
        break;
}
header('Content-Type: application/json');
print json_encode($result);
?>