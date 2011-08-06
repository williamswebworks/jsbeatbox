// constructor
function DrumMachine () {
    var samples = [
        "bassdm/BT0A0A7.WAV",
        "handclap/HANDCLP1.WAV",
        "closedhh/HHCD0.WAV",
        "openhh/HHOD0.WAV",
        "snaredm/ST7T3S7.WAV"];
    this.numDrums = samples.length;
    this.drums = new Array();
    for (var i=0; i<this.numDrums; i++) {    
        this.drums[i] = document.createElement('audio');
        this.drums[i].src = samples[i];
    }
}

DrumMachine.prototype.play = function (note) {
    var index = note%this.numDrums;
    this.drums[index].play();
}

DrumMachine.prototype.getNumDrums = function () {
    return this.numDrums;
}

var player = null;

function init() {
    var dm = new DrumMachine();
    var prog = new DummyProgramator();
    player = new Player(dm, prog, 110, 0);
    player.play();
}

