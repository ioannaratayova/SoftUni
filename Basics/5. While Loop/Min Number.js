function minNumber(args) {
    let currentNum = 0;
    let index = 0;
    let minNum = Number.POSITIVE_INFINITY;

    while(true) {
        currentNum = args[index];
        if (args[index] == 'Stop') {
            break;
        }
        if (Number(currentNum) < minNum) {
            minNum = currentNum;
        }
        index++
    }
    console.log(minNum)  
}