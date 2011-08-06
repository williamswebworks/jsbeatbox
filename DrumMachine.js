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
};

DrumMachine.prototype.play = function (note) {
    var index = note%this.numDrums;
    this.drums[index].play();
};

var dm = null;
var terminate = false;
function init() {
    dm = new DrumMachine();
    loop();
}

function x() {
    terminate = true;
}

function p() {
    terminate = false;
    loop();
}

function loop() {
    var bdrum = [1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0];
    var clap =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var ohh =   [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
    var snare = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
    for (var i=0; i<clap.length; i++) {
        setTimeout(function(i) {
                if (terminate) {
                    return;
                }
                if (bdrum[i]==1) {
                    dm.play(0);
                }
                if (clap[i]==1) {
                    dm.play(1);
                }
                if (ohh[i]==1) {
                    dm.play(3);
                }              
                if (snare[i]==1) {
                    dm.play(4);
                }
                dm.play(2);
        }, (i+1)*100, [i]);
    }
    if (!terminate) {
        setTimeout(loop, (clap.length)*100);
    }
}
