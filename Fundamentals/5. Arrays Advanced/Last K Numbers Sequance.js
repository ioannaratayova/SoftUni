function lastKNumSequence(n, k) {
    let result = [1,];

    for (let i = 1; i < n; i++) {
        let sum = result.slice(-k).reduce((a, b) => a + b, 0);
        result.push(sum);
    }
    console.log(result.join(" "));
}