var logged;
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}

function load() {
    cargarDatos(0, "");
    
  }
function cargarDatos() {

  var userJson = window.localStorage.getItem("userToken");
  var userModel = JSON.parse(userJson);
  let headers1 = new Headers();
$('#avatar-profile').attr('src','https://ui-avatars.com/api/?background=FFFFFF&color=121317&name='+ userModel.legajo.nombreApellido.replace(" ", "+"));

}
  window.onload = load;

  function preloadFunc()
    {
      var isLoginPage = window.location.href.indexOf("login") > -1;
      logged = localStorage.getItem('userToken');

      if(logged && isLoginPage){
        window.location.href = "../index";
      } else if(!logged && !isLoginPage) {
        window.location.href = "pages/login";
      } else {

      }
        
      
    }
    window.onpaint = preloadFunc();

    function tienePermisos(estado) {
      var rol = JSON.parse(logged).rol;
      if(estado == "Pendiente") {
        return rol == "A" || rol == "J";
      }else if(estado == "Autorizado") {
        return rol == "A" || rol == "C";
      } else {
        return rol == "A" || rol == "G";
      }
    }