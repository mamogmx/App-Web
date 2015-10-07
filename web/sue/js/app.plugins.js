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
            serverURL: 'services/xServer.php',
            searchURL: 'services/xSearch.php',
            app: 'sue',
            pratica: 0,
            hmenu: [],
            vmenu: []
        }, options );
        
        this.pratica = self.settings.data.pratica || -1,
        this.app = self.settings.app,
        
        this.getData = function(){
          return self.settings.data || {};  
        },
        this.setData = function(d){
            $.extend(d,self.settings.data);
        },
        this.loadVMenu = function(menu){
            var html = "";
            $.each(self.settings.dataTemplate.vMenu[menu],function(k,v){
                var tmp = $.extend({class: '',group: menu},v);
                html+=sprintf(self.settings.template.vMenu,tmp);

            });
            $("#v-menu").html(html);
            $('a[data-plugin="loadPage"]').bind("click",function(e){
                e.preventDefault();
                var d = $(this).data();
                self.loadPage(d.page);
            });
        };
        this.loadHToolbar = function(){
            var html = "";
            $.each(self.settings.dataTemplate.hMenu,function(k,v){
                html+=sprintf(self.settings.template.hMenu,v);
            });
            $("#top-navbar").html(html);
            $('a[data-plugin="loadVMenu"]').bind("click",function(e){
                e.preventDefault();
                var d = $(this).data();
                self.loadVMenu(d.menu);
            });
        };
        this.loadPage = function(page){
            var dataPost = {
                action: 'loadPage',
                pratica: self.pratica,
                app: self.app,
                page: page
            };
            $.ajax({
                url: self.settings.serverURL,
                data: dataPost,
                method: 'POST',
                dataType: 'JSON',
                success:function(data,textStatus,jqXHR){
                    console.log(data.success);
                    if(data.success==1){
                        $("#main").html(data.page);
                    }
                }
            });
        },
        this.search = function(){
            
        };
        this.save = function(){
            
        };
        this.init = function (){
            self.loadHToolbar();
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