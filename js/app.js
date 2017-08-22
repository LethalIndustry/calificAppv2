$(document).on('deviceready',function(){
    //navigator.splashscreen.hide();
    var name=device.name ;
    var plat=device.platform;
    alert(name);
    alert(plat);
    $(".btnEnviar").click(function(){
        curp = $("#curp").val();
        longitud = curp.length;
        if(curp==""){
            navigator.notification.alert('Debe llenar el campo CURP',alertDismissed,'Error', 'Ok');
            return false;
        }else{
            if(longitud!=18){
                navigator.notification.alert('El campo CURP debe contener 18 caracteres',alertDismissed,'Error', 'Ok');
                return false;
            }else{
                $.mobile.changePage("#menu", {transition: "slide", changeHash: false });
            }
        } 
    });

    document.addEventListener("backbutton", function(e){
        var activePage = $.mobile.activePage.attr("id");
        //alert(activePage);
        if(activePage==('index')){
            e.preventDefault(); 
            navigator.notification.confirm(
                "Realmente desea salir de la app?",
                function (button) {
                  if (button==2) {
                    navigator.app.exitApp();
                  }
                },"Pregunta", ["Cancelar","Ok"]
            );
        }
        if(activePage==('menu')){
            $.mobile.changePage("#index", {transition: "slide", reverse: true, changeHash: false });
        }
        if(activePage==('calendario')){
            $.mobile.changePage("#menu", {transition: "slide", reverse: true, changeHash: false });
        }
    }, false);
});

function alertDismissed() {
    // do something
}