class FileManager{

    static getLevels(main){
        console.log("Getting Levels");
        fetch("./resources/levels.json")
            .then(response => response.json())
            .then(json => {
                main.setLevels(json);
                console.log("Levels are gotten");
                main.chooseLevel();
            });
    }
}