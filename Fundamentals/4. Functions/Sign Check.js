function signCheck(numOne, numTwo, numThree) {
    let checker = 0;
    let arr = [numOne, numTwo, numThree];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            checker++;
        }
    }
    if (checker % 2 !== 0) {
        console.log('Negative');
    }
    else {
        console.log('Positive');
    }
}