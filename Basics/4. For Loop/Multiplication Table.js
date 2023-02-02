function multiplicationTable([arg1]) {
    let n = Number(arg1);
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
       sum = i * n;
       console.log(`${i} * ${n} = ${sum}`);
    }
}