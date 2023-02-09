function Arrow([arg1]) {
    let n = Number(arg1);
    let outerDots = (n - 1) / 2;
    let innerDots = n - 2;

    console.log(`${".".repeat(outerDots)}${"#".repeat(n)}${".".repeat(outerDots)}`);

    for (let row = 0; row < n - 2; row++) {
        console.log(".".repeat(outerDots) + "#" + 
        ".".repeat(innerDots) + "#" + 
        ".".repeat(outerDots));
    }

    console.log("#".repeat(outerDots + 1) + 
    ".".repeat(innerDots) + 
    "#".repeat(outerDots + 1));

    outerDots = 1;
    innerDots = 2 * n - 5;

    for (let row = 0; row < n - 2; row++) {
        console.log(".".repeat(outerDots) + "#" + 
        ".".repeat(innerDots) + "#" + 
        ".".repeat(outerDots));

        outerDots += 1;
        innerDots -= 2;
    }
console.log(".".repeat(outerDots) + "#" +
 ".".repeat(outerDots));
}