function DummyProgramator () {
    this.tracks = new Array();
    this.tracks[0] = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0];
    this.tracks[1] = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    this.tracks[2] = [1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0];
    this.tracks[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0];
    this.tracks[4] = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
}

DummyProgramator.prototype.getNote = function (track, step) {
    if (track >= this.tracks.length) {
        return 0;
    }
    if (!this.tracks[track]) {
        return 0;
    }
    if (step >= this.tracks[track].length) {
        return 0;
    }
    return (this.tracks[track][step]);
}

