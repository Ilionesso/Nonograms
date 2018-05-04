class ViewController{
    constructor(stateHolder, main){
        this.xmlns = "http://www.w3.org/2000/svg";
        this.stateHolder = stateHolder;
        this.main = main;
    }

    setGameDrawer(gameDrawer){
        this.gameDrawer = gameDrawer;
    }

// MENU
    showMenu(){
        let mainEl = document.querySelector('main');
        let menuEl = document.createElement ("div");
        menuEl.classList.add("menu");
        mainEl.innerHTML = ``;
        mainEl.appendChild(menuEl);
        this.buttons = {
            startButton: document.createElement ("div"),
            continueButton: document.createElement ("div"),
            optionsButton: document.createElement ("div"),
            aboutButton: document.createElement ("div"),
        };

        for (let buttonName in this.buttons) {
            this.buttons[buttonName].classList.add(buttonName);
            this.buttons[buttonName].classList.add('button');
            menuEl.appendChild(this.buttons[buttonName]);
        }

        this.buttons.startButton.addEventListener("click", () => this.main.chooseLevel());
        this.buttons.continueButton.addEventListener("click", () => this.main.continueGame());
        this.buttons.optionsButton.addEventListener("click", () => this.main.showOptions);
        this.buttons.aboutButton.addEventListener("click", () => this.main.showAbout);

        this.clearNavMenu();
    }

    // LEVELS
    showLevels(levels){
        let mainEl = document.querySelector('main');
        let levelCards = document.createElement("div");
        levelCards.classList.add("levels");
        Object.values(levels).forEach(level=>{
            let levelEl = document.createElement("div");
            levelEl.setAttribute("levelID", level.id);
            levelEl.classList.add("card");
            levelEl.innerHTML = `
                <label> Name: ${level.name}</label>
                <label> Size: ${level.size}</label>`;
            levelEl.addEventListener("click", (e) => this.main.startGameByID(e.currentTarget.getAttribute("levelID")));
            levelCards.appendChild(levelEl);
        });
        mainEl.innerHTML = ``;
        mainEl.appendChild(levelCards);
        this.clearNavMenu();
    }

    //GAME
    drawGame(game){
        if (game !== undefined) this.gameDrawer = game.drawer;
        if (this.gameDrawer === undefined) return;
        let mainEl = document.querySelector('main');
        mainEl.innerHTML = ``;
        this.gameDrawer.drawGameFrame();
        this.drawGameMenu();
    }


    drawGameMenu(){
        let navMenu = document.querySelector('.navMenu');
        if (navMenu == null){
            let navEl = document.querySelector('nav');
            navMenu = document.createElement("div");
            navMenu.classList.add("navMenu");
            navEl.appendChild(navMenu);
        }
        navMenu.innerHTML = '';
        let saveEl = document.createElement("div");
        saveEl.classList.add("saveGameButton");
        saveEl.classList.add("navButton");
        saveEl.addEventListener("click", () => this.main.saveGame());
        let checkEl = document.createElement("div");
        checkEl.classList.add("checkSolutionButton");
        checkEl.classList.add("navButton");
        checkEl.addEventListener("click", () => this.main.checkSolution());
        navMenu.appendChild(saveEl);
        navMenu.appendChild(checkEl);

    }


    //ABOUT

    showAbout(){

    }


    //COMMON PAGE ELEMENTS AND TOOLS
    showPage(){
        this.showSvgs();
    }

    clearNavMenu(){
        let navMenu = document.querySelector('.navMenu');
        if (navMenu)
            navMenu.innerHTML = '';
    }

    showSvgs(){
        let nav = document.querySelector("nav");
        nav.appendChild(this.svgTree());
    }


    svgTree(){
        const svgContainer = document.createElementNS (this.xmlns, "svg");
        svgContainer.setAttributeNS(null, "viewBox", "0 0 256 256");
        svgContainer.classList.add("svgTree");

        this.appendSvgByPath(svgContainer, "M103,10L360,176L-4,154Z", "rgb(98, 127, 16)", "0.78");
        this.appendSvgByPath(svgContainer, "M107,113L161,236L118,235Z", "rgb(86, 75, 4)", "0.72");
        // this.appendSvgByPath(svgContainer, "M54,26L127,43L226,-33Z","rgb(252, 253, 248)", "0.94");
        // this.appendSvgByPath(svgContainer, "M258,63L214,180L275,167Z", "rgb(251, 251, 250)", "0.96");
        this.appendSvgByPath(svgContainer, "M139,237L192,230L151,221Z", "rgb(84, 139, 13)", "0.81");
        // this.appendSvgByPath(svgContainer, "M-20,104L33,241L49,158Z", "rgb(254, 254, 254)", "0.97");
        this.appendSvgByPath(svgContainer, "M52,232L141,213L120,236Z","rgb(87, 136, 5)", "0.82");
        this.appendSvgByPath(svgContainer, "M168,172L41,54L208,58Z", "rgb(81, 112, 0)", "0.57");
        this.appendSvgByPath(svgContainer, "M19,118L63,166L36,87Z", "rgb(127, 161, 40)", "0.89");
        // this.appendSvgByPath(svgContainer, "M357,185L243,147L174,180Z", "rgb(254, 254, 254)","0.93");
        return svgContainer;
    }

    appendSvgByPath(svg, d, fill, fillOpacity){
        const path = document.createElementNS (this.xmlns, "path");
        path.setAttributeNS(null, "fill", fill);
        path.setAttributeNS(null, "d", d);
        path.setAttributeNS(null, "fill-opacity", fillOpacity);
        svg.appendChild(path);
    }



}