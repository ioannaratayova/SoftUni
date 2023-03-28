function printAndSum(arg1, arg2) {
    let numbers = [];
    let sum = 0;

    for (let i = arg1; i <= arg2; i++) {
        sum += i;
        numbers.push(i);
    }
    console.log(numbers.join(" "));
    console.log(`Sum: ${sum}`);
}