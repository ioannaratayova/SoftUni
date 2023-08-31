function solve(arr) {
    arr.sort((a, b) => a - b);
    let numbers = arr.slice(0, 2);
    console.log(numbers.join(" "))
 }