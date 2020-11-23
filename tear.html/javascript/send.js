// Send to Fortim ------------------------------------------------------
function send(){
    var hr = new XMLHttpRequest();
    var url = "tear_save.php";

    var data = document.getElementById("path").getAttribute("d");
    var line_weight = document.getElementById("line-weight").value;
    var name = document.getElementById("name_field").value;
    var comment = document.getElementById("comment_field").value;

    var vars = "color=" + color;
    vars += "&data=" + data;
    vars += "&line_weight=" + line_weight;
    vars += "&latitude=" + latitude;
    vars += "&longitude=" + longitude;
    vars += "&coordinate=" + coordinate;
    vars += "&name=" + name;
    vars += "&comment=" + comment;

    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
//            alert("Enviado com sucesso!");
            showHide('info_form');
        }
    }
    hr.send(vars); // Actually execute the request
}
