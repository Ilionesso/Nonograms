class FileManager{

    static getLevels(main){
        console.log("Getting Levels");
        fetch("./resources/levels/levels.json")
            .then(response => response.json())
            .then(json => {
                main.setLevels(json);
                console.log("Levels are gotten");
                main.chooseLevel();
            }).catch(() =>{
            fetch("./resources/levels/offlineLevels.json")
                .then(response => response.json())
                .then(json => {
                    main.setLevels(json);
                    console.log("Offline levels are gotten");
                    main.chooseLevel();
                });
        });
    }
}