function solve([arg1, arg2]) {
    let firstNum = Number(arg1);
    let secondNum = Number(arg2);
    let currentNum = 0;
    let printLine = "";
 
    for (let i = firstNum; i <= secondNum; i++) {
        currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 == 0) {
                evenSum += currentDigit;
            }
            else {
                oddSum += currentDigit;
            }
        }
        if (evenSum == oddSum) {
            printLine += i + " ";
        }
    }
    console.log(printLine);
}