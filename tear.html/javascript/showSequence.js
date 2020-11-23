// Show Sequence ------------------------------------------------------
function showSequence(){
    // print sequence -------------------------------------------------
    this.print_sequence = function(some_points){
        var value = "";
        for (var i = 0; i < some_points.length; i++) {
            value += some_points[i].getAttribute("id") + ", ";
        }
        return value;
    }

    var text = document.getElementById("sequence");
    text.value = "";
    for (var i = 0; i < all_points.length; i++) {
        text.value += "Parte " + (i + 1) + ": "
        text.value += this.print_sequence(all_points[i]) + "\n";
    }
    text.value += "Parte em construção: " + this.print_sequence(points);
}
