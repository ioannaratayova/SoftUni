function nXnMatrix(n) {
    let buff = "";
    for (let i = 1; i <= n * n; i++) {
        buff += n + " ";
        if (i % n == 0) {
            buff += "\n"
        }
    }
    console.log(buff)
}