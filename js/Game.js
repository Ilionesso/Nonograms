
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
                square.addEventListener("click", this.squareListener.bind(this))
        }
    }

    squareListener(e){
        let square = e.currentTarget;
        // console.log(this.playground);
        this.playground.invertAt([Number.parseInt(square.getAttribute("coordX")), Number.parseInt(square.getAttribute("coordY"))]);
        this.drawer.invertMarked(square);
    }

    moveCursor(to){
        if (this.playground.isCoordinateInPlayground(to))
            this.cursor = to;
    }

    moveCursorLeft(newCoordinates = this.cursor){
        newCoordinates[0]--;
        this.moveCursor(newCoordinates);
    }
    moveCursorRight(newCoordinates = this.cursor){
        newCoordinates[0]++;
        this.moveCursor(newCoordinates);
    }
    moveCursorUp(newCoordinates = this.cursor){
        newCoordinates[1]--;
        this.moveCursor(newCoordinates);
    }
    moveCursorDown(newCoordinates = this.cursor){
        newCoordinates[1]++;
        this.moveCursor(newCoordinates);
    }

    markCursor(to){
        this.playground.mark(this.cursor, to)
    }

    markCursorToEmpty(){
        this.markCursor("empty");
    }

    markCursorToFilled(){
        this.markCursor("filled");
    }
}





