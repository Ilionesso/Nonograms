class StateHolder{

    constructor(main){
        this.stateHolder = this;
        this.main = main;
        window.addEventListener("hashchange", () =>{
            console.log(location.hash);
            main.doByHash(location.hash)
        });
    }

    static getStateHolder(){
        return this.stateHolder;
    }

    setState(strState) {
        // history.pushState(null, null, "#"+strState);
        location.hash = strState;
    }

    saveGame(game){
        if (game !== undefined)
            try {
                localStorage.setItem("savedGame", JSON.stringify(GameFactory.gameCopy(game)));
                alert("Game saved. c: Be grateful.");
            } catch (error){
            console.log("Unable to save game:" + error);
            alert("Unable to save game. Sorry. :/");
            }
    }

    static eraseGame(){
        try {
            localStorage.removeItem("savedGame");
        } catch (error){
            console.log("Unable to erase game:" + error);
        }
    }

    loadGame(){
        try {
            const savedGame = localStorage.getItem("savedGame");
            if (!savedGame){
                alert("There is no saved game. o_O");
                console.log("There is no saved game.");
                return null;
            }
            return JSON.parse(savedGame)
        } catch (error){
            console.log("Unable to load game:" + error);
            alert("Unable to load game. Sorry. :/")
        }
    }

}