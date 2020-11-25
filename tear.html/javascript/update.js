// Update ------------------------------------------------------
function update(){
    // Draw sequence ------------------------------------------------------
    this.drawSequence = function(some_points){
        var new_path = "";
        for (var i = 0; i < some_points.length; i++) {
            x = some_points[i].getAttribute("cx");
            y = some_points[i].getAttribute("cy");
            if (i == 0){
                new_path += "M " + x + "," + y + " ";
            }else{
                new_path += "L " + x + "," + y + " ";
            }
        }
        return new_path;
    }
    desenho = document.getElementById("path");
    var new_path = "";
    for (var i = 0 ; i < all_points.length ; i++){
        new_path += this.drawSequence(all_points[i]);
    }
    new_path += this.drawSequence(points);
    desenho.setAttribute("d", new_path);

    // Paint it all with deafult color
    svg = document.getElementById("svg");
    circles = svg.getElementsByTagName("circle");
    for (var i = 0 ; i < circles.length ; i++){
        circles[i].setAttribute("fill", color);
    }

    // Paint last point with red
    if (points.length > 0){
        points[points.length - 1].setAttribute("fill", "red");
    }
}

