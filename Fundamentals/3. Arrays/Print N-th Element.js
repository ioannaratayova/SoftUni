function printNElement(arr) {
    let n = Number(arr[arr.length-1]);
    let ar = [];
    for (let i = 0; i < arr.length - 1; i+=n) {
        ar.push(arr[i]);
    }
    console.log(ar.join(" "));
}