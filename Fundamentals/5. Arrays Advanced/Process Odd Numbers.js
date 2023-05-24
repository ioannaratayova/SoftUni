function processOddNum(arr) {
    let newAray = [];
    let currentNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            currentNum = arr[i];
            currentNum *= 2;
            newAray.push(currentNum);
        }
    }
    newAray.reverse();
    console.log(newAray.join(" "));
}