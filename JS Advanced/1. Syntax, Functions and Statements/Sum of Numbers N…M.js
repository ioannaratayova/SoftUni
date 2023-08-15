function solve(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}