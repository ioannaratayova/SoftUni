function solve(args) {
    let currentNum;
    let index = 0;
    let sumOfPrime = 0;
    let sumOfNonPr = 0;

    while (true) {
        let isPrime = true;
        currentNum = args[index];
        
        if (currentNum == 'stop') {
            break;
        }
        currentNum = Number(args[index]);
        index++
        if (currentNum < 0) {
            console.log('Number is negative.');
            continue;
        }
        if (currentNum == 0 || currentNum == 1) {
            sumOfNonPr += currentNum;
            continue;
        }
        if (currentNum == 2) {
            sumOfPrime += currentNum;
            continue;
        }
        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumOfPrime += currentNum;
        }
        else {
            sumOfNonPr += currentNum;
        }
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPr}`);  
}