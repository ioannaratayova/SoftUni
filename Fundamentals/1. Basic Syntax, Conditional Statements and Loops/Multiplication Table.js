function multiplicationTable(arg1) {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = arg1 * i
        console.log(`${arg1} X ${i} = ${sum}`);
    }
}