function solve(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i]
    }
    
    for (let j = 0; j < arr.length; j++) {
        sum2 += arr[j][arr.length - 1 - j]
    }
    console.log(`${sum1} ${sum2}`);
}