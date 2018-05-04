class StateHolder{

    constructor(main){
        this.main = main;
        window.addEventListener("hashchange", () =>{
            console.log(location.hash);
            main.doByHash(location.hash)
        });
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
            console.log(game);
            alert("Unable to save game. Sorry. :/");
            }
    }

    loadGame(){
        try {
            const savedGame = localStorage.getItem("savedGame");
            if (!savedGame){
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