function House([n]) {
    n = Number(n);
    let startingstars = 1;

    if (n % 2 == 0) {
        startingstars = 2;
    }

    for (let row = 0; row < Math.ceil(n / 2); row++) {
        console.log(`${'-'.repeat(((n - startingstars) / 2) - row)}${'*'.repeat(startingstars + 2 * row)}${'-'.repeat(((n - startingstars) / 2) - row)}`);
    }

    for (let row = 0; row < Math.floor(n / 2); row++) {
        console.log(`|${'*'.repeat(n - 2)}|`)
    }

}