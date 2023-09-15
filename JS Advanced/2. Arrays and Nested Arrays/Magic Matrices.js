function solve(arr) {
    let arr2 = [];
    
    for (let row = 0; row < arr.length; row++) {
        let sum = arr[row].reduce(function(a, b) {
            return a + b;
        })
        arr2.push(sum)
    }
    
    for (let col = 0; col < arr[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < arr.length; row++) {
            sum += arr[row][col];
        }
        arr2.push(sum)
    }
    
    let firstEl = arr2[0];
    let bol = true;

    for (let i = 1; i < arr2.length; i++) {
        if (firstEl !== arr2[i]) {
            bol = false;
        }
    }
    console.log(bol);
}