function Axe([arg1]) {
    let n = Number(arg1);
    let width = 5 * n;
    let leftDashes = 3 * n;
    let middleDashes = 0;
    let rightDashes = width - leftDashes - middleDashes - 2;
    axeHeight = Math.trunc(n / 2);

    for (let row = 0; row < n; row++) {
        console.log("-".repeat(leftDashes) +
        "*" + "-".repeat(middleDashes) + 
        "*" + "-".repeat(rightDashes));

        middleDashes += 1;
        rightDashes -= 1;
    }
    middleDashes--;
    rightDashes++;
    leftDashes++;

    for (let i = 0; i < axeHeight; i++) {
        console.log("*".repeat(leftDashes) +
        "-".repeat(middleDashes) + 
        "*" + "-".repeat(rightDashes));
    }
    leftDashes--;

    for (let j = 0; j < axeHeight - 1; j++) {
        console.log("-".repeat(leftDashes) + 
        "*" + "-".repeat(middleDashes) + 
        "*" + "-".repeat(rightDashes));

        middleDashes += 2;
        leftDashes--;
        rightDashes--;
    }

    console.log("-".repeat(leftDashes) + 
    "*" + "*".repeat(middleDashes) + "*" + 
    "-".repeat(rightDashes))
}