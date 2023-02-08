function accountBalance(args) {
    let currentNum = 0;
    let totalMoney = 0;
    let index = 0;

    while(true) {
        currentNum = args[index];
        if (currentNum == 'NoMoreMoney') {
            break;
        }
        if (Number(currentNum) < 0) {
            console.log('Invalid operation!');
            break;
        }
        totalMoney += Number(currentNum);
        console.log(`Increase: ${Number(currentNum).toFixed(2)}`);
        index++
    }
    console.log(`Total: ${(totalMoney).toFixed(2)}`);
}