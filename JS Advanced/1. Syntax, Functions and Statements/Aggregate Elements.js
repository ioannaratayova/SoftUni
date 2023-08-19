function solve(arr) {
    let sum = 0;
    for (let el of arr) {
        sum += el;
    }
    console.log(sum);
    sum = 0;
    for (let element of arr) {
        let division = 1 / element;
        sum += division;
    }
    console.log(sum);
    let buf = "";
    for (let e of arr) {
        buf += e;
    }
    console.log(buf);
}