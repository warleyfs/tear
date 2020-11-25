// Set Color ------------------------------------------------------
function setColor(new_color) {
    color = new_color.id;
    document.getElementById("path").setAttribute("stroke", color);
    for (var i = 1 ; i <= MAX ; i++){
        element = document.getElementById("" + i);
        element.setAttribute("fill", color);
    }
}

