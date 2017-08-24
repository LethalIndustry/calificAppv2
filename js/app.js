$(document).on('deviceready',function(){
    /*var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    if(deviceType=="Android"){
        $(".btnBack").hide();
    }*/
    active = activePage();
    alert(active);
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
                $.mobile.loading('show');
                $.ajax({
                      url: "menu.html",
                      success: function(result) {
                            $("#contenido").html(result).trigger("create");
                           active = activePage();
                            alert(active);
                      }
              });                
            }
        } 
    });

    $("#contenido").on("click", ".calendario" ,function(){
      
      $.ajax({
          url: "calendario.html",
          success: function(result) {
                $("#contenido").html(result).trigger("create");
                active = activePage();
                alert(active);
          }
          });
    });

    $(".btnBack").click(function(){
        $.mobile.changePage("#menu", {transition: "none", changeHash: false });
    });

    document.addEventListener("backbutton", function(e){
        //var activePage = $.mobile.activePage.attr("id");
        active = activePage();
        alert(active);
        if(active==('index')){
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
        if(active==('menu')){
            $.mobile.changePage("#index", {transition: "none", changeHash: false });
        }
        if(active==('calendario')){
            $.mobile.changePage("#menu", {transition: "none", changeHash: false });
        }
    }, false);
});

function alertDismissed() {
    // do something
}

function activePage(){
    var active = $("div:jqmData(role='page')").attr("id");
    return active;
}