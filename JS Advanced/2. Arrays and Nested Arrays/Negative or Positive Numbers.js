function solve(arr) {
    let newArr = [];

    for (let el of arr) {
        if (el < 0) {
            newArr.unshift(el);
        }
        else if (el >= 0) {
            newArr.push(el);
        }
    }
    
    for (let i of newArr) {
        console.log(i);
    }
}