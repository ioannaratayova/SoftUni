function solve(num) {
    let numString = String(num);
    let firstDigit = numString[0];
    let sum = 0;
    let trueOrFalse = true;

    for (let i = 1; i < numString.length; i++) {
        if (numString[i] !== firstDigit) {
            trueOrFalse = false;
        }
        sum += Number(numString[i]);
    }
    console.log(trueOrFalse)
    console.log(sum + Number(firstDigit));
}