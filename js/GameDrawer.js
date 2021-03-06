
//View unit of the game
class GameDrawer{

    constructor(game){
        this.game = game;
    }

    drawGameFrame(){
        let gameFrame = document.createElement("div");
        gameFrame.classList.add('gameFrame');
        let upperPlate = document.createElement("div");
        upperPlate.classList.add('upperPlate');
        let bottomPlate = document.createElement("div");
        bottomPlate.classList.add('bottomPlate');
        gameFrame.appendChild(upperPlate);
        gameFrame.appendChild(bottomPlate);
        upperPlate.appendChild(this.drawXdeclarations());
        bottomPlate.appendChild(this.drawPlayground());
        bottomPlate.appendChild(this.drawYdeclarations());
        document.querySelector("main").appendChild(gameFrame);
    }

    drawXdeclarations(){
        return this.drawDeclarations("x", this.game.declaration.xDeclaration);

    }

    drawYdeclarations(){
        return this.drawDeclarations("y", this.game.declaration.yDeclaration);
    }

    //Universal for x and y
    drawDeclarations(dimension, declarations){

        let declarationsEl = document.createElement("div");
        declarationsEl.classList.add(dimension+'DeclarationsBlock');
        let counter = 0;
        for (const declaration of declarations){
            let declarationEl = document.createElement("div");
            declarationEl.classList.add(dimension+'Declaration');
            for (const num of declaration) {
                let decSquare = document.createElement("div");
                decSquare.classList.add('declarationSquare');
                decSquare.innerHTML = `<label>${num}</label>`;
                declarationEl.appendChild(decSquare);
            }
            counter++;
            declarationsEl.appendChild(declarationEl);
        }

        return declarationsEl;
    }

    //Draws the playground row by row, sets the divs' values by gotten frame's values
    drawPlayground(playground = this.game.playground){
        let frame = document.createElement("div");
        frame.classList.add('frame');
        for (let curY = 0; curY < playground.sizeY; curY++) {
            let row = document.createElement('div');
            row.classList.add('row');
            for (let curX = 0; curX < playground.sizeX; curX++) {
                let rect = document.createElement('div');
                rect.classList.add('square');
                if (playground.frame[[curX,curY]] === 1)
                    rect.classList.add("marked");
                else if (playground.frame[[curX,curY]] === 2)
                    rect.classList.add("crossed");
                rect.setAttribute("coordX", ""+curX);
                rect.setAttribute("coordY", ""+curY);
                row.appendChild(rect);
            }
            frame.appendChild(row);
        }
        return frame;
    }

    crossDeclarationSquare(e){
        let square = e.currentTarget;
        this.invertClass(square, "crossed");
    }

    invertMarked(square){
        this.invertClass(square, "marked");
        square.classList.remove("crossed");
    }

    invertCrossed(square){
        this.invertClass(square, "crossed");
        square.classList.remove("marked");
    }

    invertClass(square, className){
        if (square.classList.contains(className))
            square.classList.remove(className);
        else square.classList.add(className);
    }
}