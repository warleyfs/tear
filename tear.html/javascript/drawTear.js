function drawTear(content){
    path = document.getElementById("path");
    path.setAttribute("d", content[index].data);
    path.setAttribute("stroke-width", content[index].line_weight);
    index = (index == content.length - 1) ? 0 : index + 1;
}
