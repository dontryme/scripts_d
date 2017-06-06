var x = $(document);
x.ready(inicio);
function inicio()
{
    //  $("#resulSem").html('<h1>.</h1>');
   // cargaAnioTitu();
}

function cargaSemaforo(  _url ) {
    var url = _url;
    $.ajax({
        async: true,
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        url: url,
        beforeSend: inicioEnvio,
        success: cargaTablaSem,
        error: error
    });
    return false;
}

function cargaTablaSem(datos) {
    var x = $("#resulSem");
    x.html(datos);
    return false;
}
function inicioEnvio() {
    var x = $("#resulSem");
    x.html('Cargando...');
    //return false;
}
function error() {
    var x = $("#resulSem");
    x.html('Error al cargar información');
    return false;
}