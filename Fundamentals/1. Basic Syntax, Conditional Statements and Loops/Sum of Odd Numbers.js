function sumOfOddNumbers(arg1) {
    let num = Number(arg1);
    let sum = 0;
    let n = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
        console.log(i);
        sum += i;
        }
        n++;
        
        if (n == 2*num) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}