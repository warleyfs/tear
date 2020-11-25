function verticalLines(content){
  var area = document.getElementById("data");
  // Clean up the last divs
  while (area.firstChild) {
     area.removeChild(area.firstChild);
  }
  size = 100 / content.length;
  for(var i = 0 ; i < content.length ; i++){
     var newDiv = document.createElement("DIV");
     newDiv.style.width = size + "%";
     newDiv.style.height = "100%";
     newDiv.style.display = "block";
     newDiv.style.float = "left";
     newDiv.style.backgroundColor = content[i].color;
     area.appendChild(newDiv);
  }
}

