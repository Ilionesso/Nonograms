class FileManager{

    static getLevels(main){
        console.log("Getting Levels");
        if (navigator.onLine !== true)
            FileManager.getOfflineLevels();
        else
            FileManager.getOnlineLevels();
    }

    static getOnlineLevels(main) {
        fetch("./resources/levels/levels.json")
            .then(response => response.json())
            .then(json => {
                main.setLevels(json);
                console.log("Levels are gotten");
                main.chooseLevel();
            }).catch((error) => {
                console.error(error);
                FileManager.getOfflineLevels(main)
            });
    }

    static getOfflineLevels(main) {
        fetch("./resources/levels/offlineLevels.json")
            .then(response => response.json())
            .then(json => {
                main.setLevels(json);
                console.log("Offline levels are gotten");
                main.chooseLevel();
            }).catch(console.error);
    }
}