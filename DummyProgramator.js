function DummyProgramator () {
    this.tracks = new Array();
    this.tracks[0] = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0];
    this.tracks[1] = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    this.tracks[2] = [1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0];
    this.tracks[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0];
    this.tracks[4] = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
}

DummyProgramator.prototype.isNote = function (track, step) {
    if (track >= this.tracks.length) {
        return false;
    }
    if (step >= this.tracks[track].length) {
        return false;
    }
    return (this.tracks[track][step] == 1);
}

