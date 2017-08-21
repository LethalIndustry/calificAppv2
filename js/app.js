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

document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#index')){
        /* 
         Event preventDefault/stopPropagation not required as adding backbutton
          listener itself override the default behaviour. Refer below PhoneGap link.
        */
        //e.preventDefault();

        navigator.notification.confirm(
            "Do you want to exit the app?",
            function (button) {
              if (button==2) {
                navigator.app.exitApp();
              }
            }
            ,
            "EXIT",
            ["Cancelar","Ok"]
        );
    }
    else {
        navigator.app.backHistory()
    }
}, false);

function alertDismissed() {
    // do something
}