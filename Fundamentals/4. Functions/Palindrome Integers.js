function palindromeIntegers(arr) {
    let palindromeOrNot = "";
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i].toString();
        let reverseStr = currentNum.split('').reverse().join('');
        if (currentNum == reverseStr) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}