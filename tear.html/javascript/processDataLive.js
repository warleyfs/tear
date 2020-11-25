// Array para controlar dados já apresentados na tela
var currentData = [];

function processDataLive(data) {

    var content = JSON.parse(data);
    content.sort(compare);

    // Se foram recebidos mais dados do que já apresentado
    if (content.length > currentData.length) {
        
        var parent = document.getElementById("data");

        // Para cada item recebido
        content.forEach(item => {

            // O item atual existe no array de dados atuais?
            var exists = currentData.find(element => {
                
                var data1 = element != null ? Date.parse(element.date) : NaN;
                var data2 = item != null ? Date.parse(item.date) : NaN;

                return data1 == data2;
            });
            
            // Se não exite ou dados atuais vazio e item atual não nulo
            if (currentData.length == 0 || !exists && item != null) {
                
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

                // Adiciona como primeiro item na tela
                $(parent).prepend(container);
            }
        });

        // Guarda os dados atuais
        currentData = content;
    }
}

// Ordena o array em ordem crescente
function compare(a, b) {
    
    var comparison = 0;

    if (a != null && b != null) {
        var bandA = Date.parse(a.date);
        var bandB = Date.parse(b.date);

        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
    } else { comparison = -1; }

    return comparison;
}