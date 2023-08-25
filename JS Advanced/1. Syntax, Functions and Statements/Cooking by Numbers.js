function solve(arg1, arg2, arg3, arg4, arg5, arg6) {
    let num = Number(arg1);
    let arr = [arg2, arg3, arg4, arg5, arg6];

    for (let el of arr) {
        if (el == 'chop') {
            num /= 2;
            console.log(num)
        }
        else if (el == 'dice') {
            num = Math.sqrt(num, 2);
            console.log(num);
        }
        else if (el == 'spice') {
            num += 1;
            console.log(num);
        }
        else if (el == 'bake') {
            num *= 3;
            console.log(num);
        }
        else if (el == 'fillet') {
            num -= num * 0.20;
            console.log(num);
        }
    }
}