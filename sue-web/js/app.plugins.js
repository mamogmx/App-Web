/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function( $ ){

    $.fn.pluginSue = function(options){
        var self = this;
        this.settings = $.extend({
            // These are the defaults.
            // default options goes here
            app: 'sue',
            pratica: 0,
            hmenu: [],
            vmenu: []
        }, options );
        
        this.init = function (){
            $.each(self.dataMenu,function(k,v){
                
            });
            $('a[data-plugin="loadVMenu"]').bind("click",function(e){
                e.preventDefault();
                var d = $(this).data();
                self.loadVMenu(d.menu);
            });
            $('a[data-plugin="loadPage"]').bind("click",function(e){
                e.preventDefault();
                var d = $(this).data();
                self.loadPage(d.menu);
            });
        };
        this.loadVMenu = function(menu){
            alert(menu);
        };
        this.loadHToolbar = function(){
            
        };
        this.search = function(){
            
        };
        this.save = function(){
            
        };
        /*if (!this.settings.pratica){
            $("#myModalBody").html("");
            $("#myModalBody").html("Attenzione nessuna pratica");
            $('#myModal').modal("show");
        }*/
        this.init();
        return this;
    };
    
}(jQuery));