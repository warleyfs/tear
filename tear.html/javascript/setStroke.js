// Line weight ------------------------------------------------------
function setStroke(){
    var path = document.getElementById("path");
    var value = document.getElementById("line-weight").value;
    path.setAttribute("stroke-width", value);
}
