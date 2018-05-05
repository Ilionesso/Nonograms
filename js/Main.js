class Main{

    constructor(drawer){
        this.stateHolder = new StateHolder(this);
        this.audioManager = new AudioManager(this);
        this.view = new ViewController(this.stateHolder, this.audioManager, this);
        this.levels = null;
    }

    showPage(){
        this.view.showPage();
    }

    chooseLevel(){
        if (this.levels == null) return FileManager.getLevels(this);
        StateHolder.setState("levels");
        this.view.showLevels(this.levels);
    }

    startGameByID(id){
        this.game = GameFactory.getGameFromLevel(this.levels[id]);
        StateHolder.setState("game");
        this.view.drawGame(this.game);
        this.game.initListeners();
    }

    saveGame(){
        if (this.game == null || this.game === undefined) return;
        console.log(this.game);
        StateHolder.saveGame(this.game);
    }

    continueGame(){
        const savedGame = StateHolder.loadGame();
        if(!savedGame) return;
        this.game = GameFactory.getGameFromSave(savedGame);
        StateHolder.setState("game");
        this.view.drawGame(this.game);
        this.game.initListeners();
    }


    checkSolution(){
        if (this.game == null || this.game === undefined) return;
        alert("Sorry, I'm a bit busy now. I'll check your ingenious solution later. Probably. \nMy thanks to you.")
    }

    showMenu(){
        this.view.showMenu();
        StateHolder.setState("menu");
    }

    showAbout(){
        this.view.showAbout();
        StateHolder.setState("about");
    }

    showOptions(){
        this.view.showOptions();
        StateHolder.setState("options");
    }


    setLevels(levels){
        this.levels = levels;
    }

    doByHash(hash) {
        switch (hash) {
            case("#menu"):
                this.showMenu();
                break;
            case("#levels"):
                this.chooseLevel();
                break;
            case("#options"):
                this.showOptions();
                break;
            case("#about"):
                this.showAbout();
                break;

        }
        this.audioManager.setProperAudio(hash);
    }

}