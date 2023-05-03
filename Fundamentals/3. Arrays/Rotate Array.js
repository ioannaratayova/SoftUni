function rotateArray(arr) {
    let n = Number(arr[arr.length-1]);
    arr.pop();
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}