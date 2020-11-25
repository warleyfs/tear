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

    var content = JSON.parse(data);
    var parent = document.getElementById("data");
    $(parent).empty();

    content.forEach(item => {

        var container = document.createElement("div");
        container.className = "container";

        // Change background color
        container.style.backgroundColor = item != null && item.color != null ? item.color : "gray";

        //Animate name, date and comment
        var comment = document.createElement("div");
        comment.className = "comment";
        comment.innerHTML = item != null && item.name != null ? item.name : "";
        comment.innerHTML += item != null && item.comment != null ? item.comment : "";
        comment.innerHTML += item != null && item.date != null ? item.date : "";

        var svgContainer = document.createElement("div");
        svgContainer.className = "svg-container";

        var svg = SVG().size(440, 440).scale(0.3, 0.3, -150, -120).addTo(svgContainer);
        var path = svg.path(item != null && item.data != null ? item.data : "").fill('none');
        path.animate(1000, 1000).stroke({
            color: '#ffffff',
            width: 1,
            linecap: 'round',
            linejoin: 'round'
        }).loop(true, true);

        container.appendChild(comment);
        container.appendChild(svgContainer);

        parent.appendChild(container);
    });
}
