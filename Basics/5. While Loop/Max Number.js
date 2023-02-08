function maxNumber(args) {
    let currentNum = 0;
    let index = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    while(true) {
        currentNum = args[index];
        if (args[index] == 'Stop') {
            break;
        }
        if (Number(currentNum) > maxNum) {
            maxNum = currentNum;
        }
        index++
    }
    console.log(maxNum)  
}