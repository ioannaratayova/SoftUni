function factorialDivision(n1, n2) {
    let sum1 = 1;
    let sum2 = 1;
    let output = 0;

    for (let i = 1; i <= n1; i++) {
        sum1 *= i;
    }
    for (let j = 1; j <= n2; j++) {
        sum2 *= j;
    }
    output = sum1 / sum2;
    console.log(output.toFixed(2));
}