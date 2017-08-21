$(document).on('deviceready',function(){
    navigator.splashscreen.show();
    $(".btnEnviar").click(function(){
       curp = $("#curp").val();
        longitud = curp.length;
        if(curp==""){
            //alert("Debe llenar el campo CURP");
            navigator.notification.alert('You are the winner!',alertDismissed,'Game Over', 'Done');
            return false;
        }else{
            if(longitud!=18){
                alert("El campo CURP debe contener 18 caracteres");
                return false;
            }else{
                alert("Siguiente pagina");
            }
        } 
    })  
});

function alertDismissed() {
    // do something
}