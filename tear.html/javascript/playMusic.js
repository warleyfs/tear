var context = null;

function playMusic(content){
    if (context == null)
        return;
    var color = content[index].color;
    // line_weight: 0.1 - 5
    var line_weight = content[index].line_weight;
    var data = content[index].data;
    var chord = null;
    majorC = [0, 2, 4, 7, 9];
    switch(color){
        case 'lightskyblue':
            //  Fé: C
            chord = [60, 64, 67, 62];
            break;
        case 'gold':
            //  Foco: F
            chord = [53, 57, 60, 68];
            break;
        case 'tomato':
            // Força: G7
            chord = [55, 65, 62, 59];
            break;
        case 'lightgreen':
            // Saudade: Am
            chord = [57, 60, 64, 59];
            break;
        case 'blueviolet':
            // União: Dm
            chord = [62, 60, 57, 59];
            break;
        default:
            chord = [60, 64, 67, 62];
    }
    // Cravo
    setTimeout(function(note){new Guitar(context).play(note);}, 0, chord[0]);
    setTimeout(function(note){new Guitar(context).play(note);}, 250, chord[1]);
    setTimeout(function(note){new Guitar(context).play(note);}, 550, chord[2]);
    setTimeout(function(note){new Guitar(context).play(note);}, 900, chord[1]);
    setTimeout(function(note){new Guitar(context).play(note);}, 1100, chord[0]);
    setTimeout(function(note){new Guitar(context).play(note);}, 1300, chord[3]);
    setTimeout(function(note){new Guitar(context).play(note);}, 1550, chord[2]);
    setTimeout(function(note){new Guitar(context).play(note);}, 1850, chord[3]);

    // Flautin
    note_index = data.split(",").length % 5;
    function get_note(index){
        if (index  < majorC.length)
            return majorC[index]+ 72;
        else
            return majorC[index % majorC.length] + 84;
    }

    function playFlute(time, note){
        setTimeout(function(note){new Harpsichord(context).play(note);}, time, note);
    }

    switch(note_index){
        case 0:
            playFlute(100, get_note(note_index));
            playFlute(1100, get_note(note_index + 1));
            break;
        case 1:
            playFlute(50, get_note(note_index));
            playFlute(1500, get_note(note_index + 3));
            break;
        case 2:
            playFlute(10, get_note(note_index));
            break;
        case 3:
            playFlute(50, get_note(note_index));
            playFlute(1500, get_note(note_index + 1));
            playFlute(1500, get_note(note_index + 2));
            break;
        case 4:
            playFlute(500, get_note(note_index));
            playFlute(1150, get_note(note_index + 1));
            break;
    }
}
