class GameFactory{

    constructor() {
    }

    static getDefaultGame(){
        let playground = GameFactory.getPlaygroundFromDefaultMap();
        let declaration = new Declaration(playground);
        playground.setEmptyFrame();
        return new Game(playground, declaration);
    }

    static getGameFromLevel(level){
        let playground = GameFactory.getPlaygroundFromMap(level.map);
        let declaration = new Declaration();
        declaration.setDeclarationsByPlayGround(playground);
        playground.setEmptyFrame();
        return new Game(playground, declaration);
    }

    static getGameFromSave(savedGame){
        return new Game(Playground.getCopyOf(savedGame.playground), Declaration.getCopyOf(savedGame.declaration))
    }

    static getDefaultSizes(){
        return [8, 8];
    }

    static getDefaultEmptyPlayground(){
        let playground = new Playground(GameFactory.getDefaultSizes());
        playground.setEmptyFrame();
        return playground;
    }

    static getPlaygroundFromDefaultMap(){
        return this.getPlaygroundFromMap(this.getDefaultMap())
    }

    static getPlaygroundFromMap(map){
        let playground = new Playground([map[0].length, map.length]);
        playground.setFrameFromMap(map);
        return playground;
    }

    static gameCopy(game){
        let copyGame = new Game(game.playground, game.declaration);
        copyGame.drawer = null;
        return copyGame;
    }



    static getDefaultMap() {
        return [
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 1],
                [0, 1, 0, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 0]
                ]


    }
}


