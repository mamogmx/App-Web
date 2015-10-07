$(document).ready(function(){
    var opt = {template:template, dataTemplate:dataMenu,data:appData};
    var sue = $().pluginSue(opt);
});

angular.module('sueApp',[])
.controller('avvioproc',function($scope){
    //$scope=appData;
    $scope.apply();

});