function sorting(arr) {
    let newArray = [];
    let currentNumBig = 0;
    let currentNumSmall = 0;
    let idx = arr.length;
    
    for (let i = 0; i < idx; i++) {
        arr.sort((a, b) => b - a);
        currentNumBig = arr.shift();
        newArray.push(currentNumBig);

        arr.sort((a, b) => a - b);
        currentNumSmall = arr.shift()
        newArray.push(currentNumSmall);
    }
    console.log(newArray.join(" "));
}