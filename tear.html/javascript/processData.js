var index = 0;

function processData(data){
    var content = JSON.parse(data);
    verticalLines(content);
    drawTear(content);
    playMusic(content);
    showComments(content);
}
