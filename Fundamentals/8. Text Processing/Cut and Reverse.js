function cutAndReverse(str) {
    let halfLength = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, halfLength);
    let secondHalf = str.slice(halfLength);
    let one = "";
    let two = "";
    for (let i = firstHalf.length - 1; i >= 0; i--) {
        one += firstHalf[i]
    }
    for (let i = firstHalf.length - 1; i >= 0; i--) {
        two += secondHalf[i]
    }
    console.log(one)
    console.log(two)
}