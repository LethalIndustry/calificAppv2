$(document).on('deviceready',function(){
    $(".btnEnviar").click(function(){
       curp = $("#curp").val();
        longitud = curp.length;
        if(curp==""){
            alert("Debe llenar el campo CURP");
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