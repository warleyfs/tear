var index = 0;

function processDataLive(data) {

    // var content = JSON.parse(data);

    // // Change background color
    // document.body.style.backgroundColor = content.color;

    // // draw the path
    // path = document.getElementById("path");
    // path.setAttribute("d", content.data);
    // path.setAttribute("stroke-width", content.line_weight);
    // index = (index == content.length - 1) ? 0 : index + 1;

    // //Animate name, date and comment
    // comment = document.getElementById("comments");
    // comment.innerHTML = content["name"];
    // comment.innerHTML += content["comment"];
    // comment.innerHTML += content["date"];

    debugger;

    var content = JSON.parse(data);
    content.sort(compare);

    var parent = document.getElementById("data");
    $(parent).empty();

    content.forEach(item => {

        var container = document.createElement("div");
        container.className = "container";

        // Change background color
        container.style.backgroundColor = item != null && item.color != null ? item.color : "gray";

        // Animate name, date and comment
        var info = document.createElement("div");
        info.className = "comment";

        var name = document.createElement("label");
        name.innerHTML = item != null && item.name != null ? item.name.replace('<hr>', '').replace('<br>', '') : "";
        
        var comment = document.createElement("label");
        comment.innerHTML = item != null && item.comment != null ? item.comment : "";
        
        var date = document.createElement("label");
        date.innerHTML = item != null && item.date != null ? new Date(item.date).toLocaleString() : "";

        info.appendChild(name);
        info.appendChild(comment);
        info.appendChild(date);

        var svgContainer = document.createElement("div");
        svgContainer.className = "svg-container";

        var svg = SVG().size(440, 440).scale(0.5, 0.5, -220, -200).addTo(svgContainer);
        var path = svg.path(item != null && item.data != null ? item.data : "").fill('none');
        path.animate(1000, 1000).stroke({
            color: '#ffffff',
            width: 1,
            linecap: 'round',
            linejoin: 'round'
        }).loop(true, true);

        container.appendChild(info);
        container.appendChild(svgContainer);

        parent.appendChild(container);
    });
}

function compare(a, b) {
    
    var comparison = 0;

    if (a != null && b != null) {
        var bandA = Date.parse(a.date);
        var bandB = Date.parse(b.date);

        if (bandA > bandB) {
            comparison = -1;
        } else if (bandA < bandB) {
            comparison = 1;
        }
    } else { comparison = -1; }

    return comparison;
  }