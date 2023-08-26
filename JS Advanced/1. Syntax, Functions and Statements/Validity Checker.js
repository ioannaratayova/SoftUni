function solve(arg1, arg2, arg3, arg4) {
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    let formula3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let formula1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let formula2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));

    if (formula1 == parseInt(formula1)) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`)
    }

    if (formula2 == parseInt(formula2)) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`)
    }

    if (formula3 == parseInt(formula3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}