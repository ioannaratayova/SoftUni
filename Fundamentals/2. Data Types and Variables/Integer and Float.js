function integerAndFloat(arg1, arg2, arg3) {
    let sum = Number(arg1 + arg2 + arg3);
    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`);
    }
    else {
        console.log(`${sum} - Float`);
    }
}