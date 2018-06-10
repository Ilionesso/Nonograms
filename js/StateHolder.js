//Manipulations with hash and saving game.
//Uses History API and Local Storage
class StateHolder{

    constructor(main){
        this.main = main;
        window.addEventListener("hashchange", () =>{
            // console.log(location.hash);
            main.doByHash(location.hash);
        });
    }

    static setState(strState) {
        // history.pushState(null, null, "#"+strState);
        location.hash = strState;
    }

    static saveGame(game){
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

    static loadGame(){
        try {
            const savedGame = localStorage.getItem("savedGame");
            if (!savedGame){
                alert("There is no saved game. o_O");
                console.log("There is no saved game.");
                return null;
            }
            return JSON.parse(savedGame)
        } catch (error){
            console.log("Unable to load a game:" + error);
            alert("Unable to load a game. Sorry. :/")
        }
    }

    //"About" page contains a destructible tree. If it is destroyed ones, it is destroyed forever. Makes sense, I guess.
    static isTreeDestroyed(){
        return localStorage.getItem("tree") === "1";
    }

    static destroyTree(){
        localStorage.setItem("tree", "1");
    }

}