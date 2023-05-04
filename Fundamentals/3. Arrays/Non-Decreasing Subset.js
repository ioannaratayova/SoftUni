function nonDecreasingSubset(arr) {
    let currentMax = -Infinity;
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentMax) {
            newArray.push(arr[i]);
            currentMax = arr[i];
        }
    }
    console.log(newArray.join(" "));
}