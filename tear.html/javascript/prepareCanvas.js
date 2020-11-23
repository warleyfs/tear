function prepareCanvas() {
    // Draw Functions ------------------------------------------------------
    this.f1 = function(i){
        return i * 3 + 1;
    }

    this.f2 = function(i){
        var result = (i + 1) * 3;
        result = (result > 43) ? result - 43 : result + 11;
        return result;
    }

    this.f3 = function(i){
        var result = (i + 1) * 3;
        result = (result > 30) ? result - 30 : result + 24;
        return result;
    }

    // Adjust canvas size, margin and scale
    var canvas = document.getElementById("svg");

    // calculate the canvas size
    var size = document.getElementById("thisCanvas").offsetWidth;
    if (size > document.getElementById("thisCanvas").offsetHeight)
        size = document.getElementById("thisCanvas").offsetHeight

    var scale = size / canvas.getAttribute("width");
    canvas.style.transform = "scale(" + scale + ")";

    var margin = (size - canvas.getAttribute("width")) / 2 + 1;
    canvas.style.marginLeft = margin + "px";

    // Draw the points
    center = 220;
    createTear(center, 210, 0, this.f1);
    createTear(center, 130, 90, this.f2);
    createTear(center, 80, 180, this.f3);
}
