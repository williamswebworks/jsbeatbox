// constructor
var sampleRate = 44100;
function DrumMachine () {
    var samples = [
        "bassdm/BT0A0A7.WAV",
        "handclap/HANDCLP1.WAV",
        "closedhh/HHCD0.WAV",
        "openhh/HHOD0.WAV",
        "snaredm/ST7T3S7.WAV",
        "hitomdm/HT0D3.WAV"];
    this.numDrums = samples.length;
    this.drums = new Array();
    for (var i=0; i<this.numDrums; i++) {
        this.drums[i] = document.createElement('audio');
        this.drums[i].src = samples[i];
    }
}

DrumMachine.prototype.play = function (inst, note) {
    if (note > 0) {
        console.log(inst + " : " + note);
    }
    var index = inst%this.numDrums;
    if (note != 0) {
        this.drums[index].play();
    }
}

DrumMachine.prototype.getNumDrums = function () {
    return this.numDrums+1;
}

var player = null;

function init() {
    var dm = new DrumMachine();
    var prog = new DummyProgramator();
    player = new Player(dm, prog, 90, 0);
    player.play();
}

