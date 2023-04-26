function reverseArrayOfNumbers(n, arr) {
    let newArr = [];
    for (let i = n-1; i >= 0; i--) {
        let element = arr[i];
        newArr.push(element);
    }
    console.log(newArr.join(" "));
}