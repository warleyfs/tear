// Renda-se ------------------------------------------------------
function createSymmetry() {
    if (points.length < 2)
        return;
    var steps = [];
    var first = points[0];
    var actual = points[0];
    for (var i = 1; i < points.length; i++) {
        x1 = parseInt(actual.getAttribute("id"));
        x2 = parseInt(points[i].getAttribute("id"));
        step = (x1 < x2) ? x2 - x1 : x2 - x1 + MAX;
        steps.push(step);
        actual = points[i];
    }
    var starts = [points[0]];
    while (starts.indexOf(actual) == -1) {
        starts.push(actual);
        for (var i = 0; i < steps.length; i++) {
            var next = parseInt(actual.getAttribute("id")) + parseInt(steps[i]);
            next = (next == MAX) ? MAX : next % MAX;
            var current = document.getElementById(next);
            points.push(current);
            actual = current;
        }
    }
    all_points.push(points)
    points = [];
    update();
}

