function solve(arr) {
    let arr2 = [];
    let maxNum = arr[0];
    arr2.push(maxNum);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= maxNum) {
            maxNum = arr[i];
            arr2.push(arr[i]);
        }
    }
    return arr2
}