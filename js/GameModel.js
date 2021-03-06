// Game's frame of (non)marked squares. This should be a picture in final.
class Playground {
    constructor(size){
        this.size = size;
        this.sizeX = size[0];
        this.sizeY = size[1];
        this.frame = this.setEmptyFrame();
    }

    static getCopyOf(playground){
        let newPlayground = new Playground(playground.size);
        newPlayground.frame = playground.frame;
        return newPlayground;
    }

    setEmptyFrame(){
        this.frame = Playground.getFrame(this.size, 0);
    }

    //Map is 2dimensional array in order (x, y)
    setFrameFromMap(map){

        this.frame = {};
        for (let curY = 0; curY < this.sizeY; curY++)
            for (let curX = 0; curX < this.sizeX; curX++)
                this.frame[[curX, curY]] = map[curY][curX];
    }

    //Returns a frame of specified size, filled by "filler" value
    static getFrame(arrayOfSizes, filler) {
        let frame = {};
        for (let x = 0; x < arrayOfSizes[0]; x++)
            for (let y = 0; y < arrayOfSizes[1]; y++)
                frame[[x, y]] = filler;
        return frame;
    }

    //Defines, if the game's frame contains coordinates
    isCoordinateInPlayground(coordinates) {
        return this.frame[coordinates] !== undefined && this.frame[coordinates] !== null;
    }

    mark(coordinates, to){
        if (this.isCoordinateInPlayground(coordinates))
            this.frame[coordinates] = to;
    }

    invertMarkedAt(coordinates){
        switch (this.frame[coordinates]){
            case (1):
                this.mark(coordinates, 0);
                break;
            case (2):
            default:
                this.mark(coordinates, 1);
                break;

        }
    }

    invertCrossedAt(coordinates){
        switch (this.frame[coordinates]){
            case (2):
                this.mark(coordinates, 0);
                break;
            case (1):
            default:
                this.mark(coordinates, 2);
                break;
        }
    }


    at(coordinates){
        return this.frame[coordinates];
    }

    isFilledAt(coordinates, order){
        if (!order)
            return this.frame[coordinates] === 1;
        return this.frame[[coordinates[order[0]], coordinates[order[1]]]] === 1;
    }

}
// Game's columns under its playground and rows to the right from its playground that describes how many squares in this
// row/column are marked in sequence. Between sequences must be at least one unmarked square.
class Declaration {
    constructor() {
    }

    static getCopyOf(declaration){
        let newDeclaration = new Declaration();
        //single declarations are arrays of arrays
        newDeclaration.xDeclaration = declaration.xDeclaration;
        newDeclaration.yDeclaration = declaration.yDeclaration;
        return newDeclaration;
    }

    setDeclarationsByPlayGround(playGround) {
        this.xDeclaration = Declaration.getXDeclarationByPlayGround(playGround);
        this.yDeclaration = Declaration.getYDeclarationByPlayground(playGround);
    }

    //Creates declarations by gotten solved playground
    static getFacetDeclarationByPlayground(playGround, order) {
        const sizeFirst = playGround.size[order[0]]; // first
        const sizeSecond = playGround.size[order[1]]; // second

        let declaration = [];
        for (let curSecond = 0; curSecond < sizeSecond; curSecond++) {
            let newColumn = [];
            let counter = 0;
            for (let curFirst = 0; curFirst < sizeFirst; curFirst++) {
                if (playGround.isFilledAt([curFirst, curSecond], order))
                    counter++;
                else if (counter !== 0) {
                    newColumn.push(counter);
                    counter = 0;
                }
            }
            if (counter !== 0) {
                newColumn.push(counter);
            }
            declaration[curSecond] = newColumn;
            }
        return declaration;
    }

    static getYDeclarationByPlayground(playGround) {
        return Declaration.getFacetDeclarationByPlayground(playGround, [0, 1]);
    }

    static getXDeclarationByPlayGround(playGround) {
        return Declaration.getFacetDeclarationByPlayground(playGround, [1, 0]);
    }
}




