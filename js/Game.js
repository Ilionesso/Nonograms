
class Game{
    constructor(playground, declaration){
        this.playground = playground;
        this.declaration = declaration;
        this.size = playground.size;
        this.initDrawer();
    }

    initDrawer(){
        this.drawer = new GameDrawer(this);
    }

    initListeners(){
        this.initDeclarationSquaresListeners();
        this.initSquaresListeners();
    }

    drawGameFrame(){
        this.drawer.drawGameFrame();
    }

    initDeclarationSquaresListeners(){
        let squares = document.querySelectorAll(".declarationSquare");
        squares.forEach(square => {
            square.addEventListener("click", this.drawer.crossDeclarationSquare);
        })
    }

    initSquaresListeners(){
        let squares = document.querySelectorAll(".square");
        for (let square of squares) {
                square.addEventListener("mousedown", this.squareListener.bind(this));
                square.addEventListener("contextmenu", evt => evt.preventDefault());
        }
    }

    squareListener(e){
        let square = e.currentTarget;
        switch (e.button){
            case (0):
                this.playground.invertAt([Number.parseInt(square.getAttribute("coordX")), Number.parseInt(square.getAttribute("coordY"))]);
                this.drawer.invertMarked(square);
                break;
            case (2):
                this.drawer.invertCrossed(square);
                break;
        }

    }

}





