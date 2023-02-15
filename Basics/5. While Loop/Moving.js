function solve(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let c = Number(args[2]);
    let index = 3;
    let freeSpace = a * b * c;

    while(true) {
        if (args[index] == 'Done') {
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }
        freeSpace -= Number(args[index]);
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++
    }
}