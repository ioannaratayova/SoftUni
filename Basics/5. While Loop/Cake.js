function solve(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let index = 2;
    let numOfPieces = a * b;

    

    while(true) {
        if (args[index] == 'STOP') {
            console.log(`${numOfPieces} pieces are left.`);
            break;
        }

        numOfPieces -= Number(args[index]);
        
        if (numOfPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(numOfPieces)} pieces more.`);
            break;
        }


        index++
    }
}