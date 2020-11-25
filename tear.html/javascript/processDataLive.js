var currentData = [];

function processDataLive(data) {

    var content = JSON.parse(data);
    content.sort(compare);

    if (content.length > currentData.length) {
        
        var parent = document.getElementById("data");

        if (currentData.length == 0) 
            $(parent).empty();

        content.forEach(item => {

            var exists = currentData.find(element => {
                return new Date(element.date) == new Date(item.date);
            });

            if (currentData.length == 0 || !exists) {
                
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
            }
        });

        currentData = content;
    }
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
    } else { comparison = 1; }

    return comparison;
  }