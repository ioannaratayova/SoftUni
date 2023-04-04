function reverseString(arg1) {
    let arr = arg1.split("");
    arr.reverse();
    let buff = "";
    for (let i = 0; i < arr.length; i++) {
        buff += arr[i];
    } 
    console.log(buff);
}