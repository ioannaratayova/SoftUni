function triangleOfNumbers(arg1) {
    for (let i = 1; i <= arg1; i++) {
        console.log(" ".repeat(arg1 - i) + Array(i + 1).join(i + " "));
    }
}