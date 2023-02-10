function Diamond([n]) {
    n = Number(n);
    if (n <= 2) {
        console.log('*'.repeat(n));
        return;
    }
    if (n == 2) {
        console.log("**")
    }

    let startingstars = 1;
    let height = Math.floor(n / 2);
    let middleDashes = "-";
    if (n % 2 == 0) {
        startingstars = 2;
        height = (n / 2) - 1;
        middleDashes = "--";
    }
    let dashes = (n - startingstars) / 2;

    console.log("-".repeat(dashes) + 
        "*".repeat(startingstars) + 
        "-".repeat(dashes));

    for (let row = 1; row < height; row++) {
        
        console.log("-".repeat(dashes - row) + "*" + middleDashes +
         "*" + "-".repeat(dashes-row));

        middleDashes += "--";
    }
    console.log(`*${middleDashes}*`)

    for (let row = 1; row < height; row++) {
        console.log("-".repeat(row) + "*" + "-".repeat(n - 2 - row * 2) + "*" + "-".repeat(row));
        
        middleDashes += "--";
    }

    console.log("-".repeat(dashes) + 
        "*".repeat(startingstars) + 
        "-".repeat(dashes));
}