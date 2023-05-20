function sumFirstAndLast(arr) {
    let firstEl = arr.shift();
    let secondEl = arr.pop();
    console.log(Number(firstEl) + Number(secondEl));
}