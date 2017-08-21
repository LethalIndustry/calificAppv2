$(document).on('deviceready',function(){
    navigator.splashscreen.show();
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
    })  
});

function alertDismissed() {
    // do something
}