function sumNumbers(args) {
    let firstNum = Number(args[0]);
    let index = 1;
    let sum = 0;
    
    while (true) {
        sum += Number(args[index]);
        if (sum >= firstNum) {
            console.log(sum);
            break;
        }
        index++
    }
}