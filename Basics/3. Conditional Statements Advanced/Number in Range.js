function NumberInRange([arg1])  {
    let num = Number(arg1);
    if (num >= -100 && num <= 100 && num != 0) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}