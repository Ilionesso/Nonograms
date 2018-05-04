
class Tools {
    static filterZeros(multidimensionalArray) {
        if (Array.isArray(multidimensionalArray[0])) {
            for (let i = 0; i < multidimensionalArray.length; i++)
                multidimensionalArray[i] = Tools.filterZeros(multidimensionalArray[i]);
            return multidimensionalArray;
        }
        else return multidimensionalArray.filter(num => num !== 0);
    }

    static interpretDimension(dimension) {
        switch (dimension) {
            case ("y"):
                return [0, 1];
            case ("x"):
                return [1, 0];
            case ([0, 1]):
                return "y";
            case ([1, 0]):
                return "x";
        }
    }


}

