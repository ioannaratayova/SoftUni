function addAndSubtract(n1, n2, n3) {
    let sum = (n1, n2) => n1 + n2;
    let subtract = (all, n3) => all - n3;
    console.log(subtract(sum(n1, n2), n3))
}