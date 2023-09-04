function solve(arr) {
    let biggestElement = arr[0][0];
 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggestElement) {
                biggestElement = arr[i][j];
            }
        }
    }
    return biggestElement
}