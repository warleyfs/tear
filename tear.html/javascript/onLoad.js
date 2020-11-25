var points = []; // Current draw
var all_points = []; // All draws (with symmetry created)
var MAX = 54;
var color = "yellow";
var latitude = null;
var longitude = null;
var coordinate = null;

function load(){
    prepareCanvas();
    showInstructions();

//WhatsApp ------------------------------------------------------------
    var conteudo = encodeURIComponent(
            "Experimente o tear digital " + document.title + " #FiqueEmCasa " + window.location.href);
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;

//Twitter ---------------------------------------------------------------       
    var url = encodeURIComponent(window.location.href);
    var titulo = encodeURIComponent(document.title);
    document.getElementById("twitter-share-btt").href =
        "https://twitter.com/intent/tweet?url="+url+"&text="+"Experimente o tear digital "+titulo;

//Geolocation -------------------------------------------------------
    var target = document.querySelector('#map');
    navigator.geolocation.getCurrentPosition(function(position) {
        latitude   = position.coords.latitude;
        longitude  = position.coords.longitude;
        coordinate = new google.maps.LatLng(latitude, longitude);
    });
}
