function Player(drumMachine, programator, bpm, shuffle) {
    this.drumMachine = drumMachine;
    this.programator = programator;
    this.step = 0;
    this.running = false;
    this.setBPM(bpm);    
    this.setShuffle(shuffle);
}

Player.prototype.setShuffle = function (s) {
    this.shuffle = s / 100;
}

Player.prototype.setBPM = function (bpm) {
    this.bpm = bpm;
}

Player.prototype.getInterval = function () {
    return 60 / this.bpm / 4;
}

Player.prototype.play = function () {
    this.running = true;
    this.nextEvent();
}

Player.prototype.pause = function () {
    this.running = false;
}

Player.prototype.resume = function () {
    this.play();
}

Player.prototype.nextEvent = function () {    
    if (this.running) {
        for (var inst=0; inst<this.drumMachine.getNumDrums(); inst++) {
            this.drumMachine.play(inst, this.programator.getNote(inst, this.step));
        }
        
        this.step = (this.step + 1) % 16;
        
        setTimeout(
            function(that) {
                that.nextEvent();
            },
            this.getInterval()*this.getShuffle(this.step) * 1000,
            this);
    }
}

Player.prototype.getShuffle = function (x) {
    if (x%2 == 0) {
        return 1-this.shuffle;
    } else {
        return 1+this.shuffle;
    }
}
