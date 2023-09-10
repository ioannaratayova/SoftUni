function solve(arr, num) {
    let arr2 = [];
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= arr.length; j++) {
            arr.unshift(arr.pop())
        }
    }
    console.log(arr.join(" "));
}