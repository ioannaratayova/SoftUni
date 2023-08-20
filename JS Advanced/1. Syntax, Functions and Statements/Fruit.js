function solve(arg1, arg2, arg3) {
    let gKg = Number(arg2 / 1000);
    let moneyForFruits = (gKg * arg3).toFixed(2);
    console.log(`I need $${moneyForFruits} to buy ${(gKg).toFixed(2)} kilograms ${arg1}.`)
}