
class AudioManager {

    constructor(main) {
        this.main = main;
        this.resourcesPrefix = "./resources/music/";
        this.audioNames = ["Bach.mp3", "Grieg.mp3", "Wait.mp3"];
    };

    setProperAudio(hash) {
        switch (hash) {
            case ("#game"):
                this.newGameAudio();
                break;
            default:
                if (this.audio !== undefined) this.audio.pause();
                this.audio = undefined;
                break;
        }
    }

    newGameAudio() {
        this.audio = new Audio(this.resourcesPrefix + this.randomAudioName());
        this.audio.setAttribute("loop", "true");
    }

    randomAudioName(){
        const randomInt = Math.floor(Math.random() * Math.floor(this.audioNames.length))
        return this.audioNames[randomInt];
    }



    switchAudioPlay() {
        if (this.audio === undefined) return console.error("Audio is undefined");
        if (this.audio.paused)
            this.audio.play();
        else
            this.audio.pause();
    }
}

