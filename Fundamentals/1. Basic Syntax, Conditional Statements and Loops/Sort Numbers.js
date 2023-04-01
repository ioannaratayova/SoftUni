function sortNumbers(arg1, arg2, arg3) {
    let arr1 = [arg1, arg2, arg3];
    arr1.sort();
    arr1.reverse()
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
}