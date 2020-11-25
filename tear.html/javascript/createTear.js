// Create Table ------------------------------------------------------
function createTear(center, radius, angle, increment) {

    //initial angle
    angle = angle * Math.PI / 180;

    // Calculate the 6 vertex
    var vertex = [];
    for (var i = 0; i < 6; i++) {
        ang = angle + (i * Math.PI / 3);
        vx = Math.round(center + radius * Math.cos(ang));
        vy = Math.round(center - radius * Math.sin(ang));
        vertex.push({ x: vx, y: vy });
    }

    var allVertex = [];
    //calculate the other points
    count = 7;
    for (var i = 0; i < vertex.length; i++) {
        start = vertex[i];
        next = vertex[(i + 1) % vertex.length];
        difx = (start.x >= next.x) ? start.x - next.x : next.x - start.x;
        dify = (start.y >= next.y) ? start.y - next.y : next.y - start.y;

        if (start.x >= next.x && start.y >= next.y) {
            vx1 = next.x + difx / 1.5;
            vy1 = next.y + dify / 1.5;
            vx2 = next.x + difx / 3;
            vy2 = next.y + dify / 3;
        }
        if (start.x >= next.x && start.y < next.y) {
            vx1 = next.x + difx / 1.5;
            vy1 = start.y + dify / 3;
            vx2 = next.x + difx / 3;
            vy2 = start.y + dify / 1.5;
        }
        if (start.x < next.x && start.y < next.y) {
            vx1 = start.x + difx / 3;
            vy1 = start.y + dify / 3;
            vx2 = start.x + difx / 1.5;
            vy2 = start.y + dify / 1.5;
        }
        if (start.x < next.x && start.y == next.y) {
            vx1 = start.x + difx / 3;
            vy1 = next.y + dify / 3;
            vx2 = start.x + difx / 1.5;
            vy2 = next.y + dify / 1.5;
        }
        if (start.x < next.x && start.y > next.y) {
            vx1 = start.x + difx / 3;
            vy1 = next.y + dify / 1.5;
            vx2 = start.x + difx / 1.5;
            vy2 = next.y + dify / 3;
        }
        allVertex.push(vertex[i]);
        allVertex.push({ x: vx1, y: vy1 });
        allVertex.push({ x: vx2, y: vy2 });
    }

    var canvas = document.getElementById("svg");

    for (var i = 0; i < allVertex.length; i++) {
        createPoint(allVertex[i].x, allVertex[i].y, increment(i), canvas);
    }
}

