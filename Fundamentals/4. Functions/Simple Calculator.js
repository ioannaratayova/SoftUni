function solve(n1, n2, operator) {
    let add = (n1, n2) => n1 + n2;
    let subtract = (n1, n2) => n1 - n2;
    let multiply = (n1, n2) => n1 * n2;
    let divide = (n1, n2) => n1 / n2;
    switch (operator) {
        case 'add': console.log(add(n1, n2)); break;
        case 'subtract': console.log(subtract(n1, n2)); break;
        case 'multiply': console.log(multiply(n1, n2)); break;
        default: console.log(divide(n1, n2)); break;
    }
}