function solve(a) {
    let pattern = /[a-zA-Z0-9]+/g
    let arr = a.match(pattern);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
     let temp = arr[i].toUpperCase();
     newArr.push(temp);
    }
    let newArrSep = newArr.join(", ");
    console.log(newArrSep);
 }