function showComments(content){
    var area = document.getElementById("comments");
    var div = document.createElement("DIV");
    var span = document.createElement("SPAN");
    span.setAttribute("class", "comment");
    span.innerHTML = content[index].comment;
    div.appendChild(span);
    span = document.createElement("SPAN");
    span.setAttribute("class", "date");
    span.innerHTML = content[index].date;
    div.appendChild(span);
    span = document.createElement("SPAN");
    span.setAttribute("class", "name");
    span.innerHTML = content[index]["name"];
    div.appendChild(span);
    area.insertBefore(div,area.firstChild);
}

