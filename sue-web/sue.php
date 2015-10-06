<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>
<html lang="it">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    
    <title>Sportello Unico dell'Edilizia OnLine</title>
    <meta name="generator" content="Bootply" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <script src="../js/jquery-2.1.4.min.js"></script>
    <script src="../js/jquery-ui.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/angular.min.js"></script>
    <script src="../js/sprintf.js"></script>
    
    <script>
        /*Retrive data from pg query*/
        var appData = {id:0,pratica:0,avvioproc:{},soggetti:[]};
    </script>
    
    <script src="js/template.js"></script>
    <script src="js/app.plugins.js"></script>
    <script src="controller/sue.controller.js"></script>
    <link rel="stylesheet" href="../css/themes-ui/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="css/sue.css">
</head>
<body>
    <div id="header">
        <span id="logo"></span>
        <span style="float:right;text-align:right;padding-right:50px;">
            <div>Sportello Unico dell'Edilizia OnLine</div>
            <div style="font-size:20px;">Istanza di Demo</div>
            <div style="font-size:15px;">Utente : mamo - <span id="orario"></span></div>
        </span>
    </div>
    <div id="h-toolbar" class="navbar navbar-default">
        <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <i class="icon-reorder"></i>
            </button>
            <a class="navbar-brand" href="#">
                Pratica
            </a>
        </div>
        <nav class="collapse navbar-collapse">
            <ul class="nav navbar-nav" id="top-navbar"></ul>
        </nav>
    </div>
    <div id="wrapper">
        <div id="sidebar-wrapper" class="col-md-1">
            <div id="sidebar">
                <ul class="nav list-group" id="v-menu">
                    
                </ul>
            </div>
        </div>
        <div id="main-wrapper" class="col-md-11 pull-right">
            <div id="main">
              
       
            </div>
        </div>
    </div>
    
    <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h3 id="myModalLabel"></h3>
        </div>
        <div class="modal-body" id="myModalBody">
            
        </div>
        <div class="modal-footer" id="myModalFooter">
            
        </div>
    </div>
</body>
</html>