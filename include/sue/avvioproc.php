<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$html=<<<EOT
<form>
<div class="container-fluid">
    <div class="row form-group">
        <div class="col-md-6">
            <label for="numero">Numero Pratica</label>
            <input type="text" class="form-control" id="numero" ng-model="appData.avvioproc.numero" placeholder="Numero Pratica" class="">
        </div>
        <div class="col-md-6">
            <label for="data_presentazione">Data Presentazione</label>
            <input type="date" class="form-control" id="data_presentazione" ng-model="appData.avvioproc.data_presentazione" placeholder="" class="">
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-6">
            <label for="protocollo">Protocollo</label>
            <input type="text" class="form-control" id="protocollo" ng-model="appData.avvioproc.protocollo" placeholder="Protocollo" class="">
        </div>
        <div class="col-md-6">
            <label for="data_protocollo">Data Protocollo</label>
            <input type="date" class="form-control" id="data_protocollo" ng-model="appData.avvioproc.data_protocollo" placeholder="" class="">
        </div>
    </div>
</div>
</form>
EOT;
?>