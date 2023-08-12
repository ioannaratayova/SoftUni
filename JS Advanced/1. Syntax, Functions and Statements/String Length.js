function solve(param1, param2, param3) {
    let paramLen1 = param1.length;
    let paramLen2 = param2.length;
    let paramLen3 = param3.length;
    let sum = Math.floor(paramLen1 + paramLen2 + paramLen3);
    let averageSum = Math.floor(sum / 3);
    console.log(sum);
    console.log(averageSum);
}