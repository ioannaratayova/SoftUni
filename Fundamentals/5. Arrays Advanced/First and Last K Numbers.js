function firstAndLastKNum(arr) {
    let kNum = arr.shift();
    console.log(arr.slice(0, Number(kNum)).join(" "));
    console.log(arr.slice(arr.length-kNum, arr.length).join(" "))
}