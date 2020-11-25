// Create Nails ------------------------------------------------------
function createPoint(x, y, id, canvas) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    element.setAttribute("cx", x);
    element.setAttribute("cy", y);
    element.setAttribute("r", 5);
    element.setAttribute("stroke", "black");
    element.setAttribute("fill", color);
    element.setAttribute("id", id);
    element.addEventListener("click", function () { draw(this); }, false);
    canvas.appendChild(element);
    var text = document.createElementNS('http://www.w3.org/2000/svg', "text");
    text.innerHTML = "" + id;
    text.setAttribute("x", x - 5);
    text.setAttribute("y", y + 2.5);
    text.addEventListener("click", function () { draw(element); }, false);
    canvas.appendChild(text);
}

