class Main{

    constructor(drawer){
        this.stateHolder = new StateHolder(this);
        this.view = new ViewController(this.stateHolder, this);
        this.levels = null;
    }

    showPage(){
        this.view.showPage();
    }

    chooseLevel(){
        if (this.levels == null) return FileManager.getLevels(this);
        this.stateHolder.setState("levels");
        this.view.showLevels(this.levels);
    }

    startGameByID(id){
        this.game = GameFactory.getGameFromLevel(this.levels[id]);
        this.stateHolder.setState("game");
        this.view.drawGame(this.game);
        this.game.initListeners();
    }

    saveGame(){
        if (this.game == null || this.game === undefined) return;
        console.log(this.game);
        this.stateHolder.saveGame(this.game);
    }

    continueGame(){
        const savedGame = this.stateHolder.loadGame();
        this.game = GameFactory.getGameFromSave(savedGame);
        this.stateHolder.setState("game");
        this.view.drawGame(this.game);
        this.game.initListeners();
    }


    checkSolution(){
        if (this.game == null || this.game === undefined) return;
        alert("Sorry, I'm a bit busy now. I'll check your awesome solution later. Maybe. \nMy thanks to you.")
    }

    showMenu(){
        this.view.showMenu();
        this.stateHolder.setState("menu");
    }

    setLevels(levels){
        this.levels = levels;
    }

    doByHash(hash){
        switch (hash){
            case("#menu"):
                this.showMenu();
                break;
            case("#levels"):
                this.chooseLevel();
                break;
        }

    }
}