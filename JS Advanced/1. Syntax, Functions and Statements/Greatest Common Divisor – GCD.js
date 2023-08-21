function solve(num1, num2) {
    let gcd;
    let a = Number(num1);
    let b = Number(num2);
    while(a != b) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    gcd = a;
    console.log(a)
}