function solve(arr) {
    let arr2 = [];
    let num;
    let numLoop = arr.length
    arr.sort((a, b) => {
        return a - b;
    })

    for (let i = 0; i < numLoop; i++) {
        if (i % 2 == 0) {
            num = arr.shift();
            arr2.push(num);
        }
        else if (i % 2 == 1) {
            num = arr.pop();
            arr2.push(num);
        }
    }
    return arr2;
}