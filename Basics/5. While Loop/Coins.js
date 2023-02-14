function solve(input) {
    let amount = Math.round(Number(input.shift()) * 100);
    let coins = 0
    while (amount > 0) {
        if (amount >= 200) {
            amount = amount - 200
            coins++
            continue
        }
        if (amount >= 100) {
            amount = amount - 100
            coins++
            continue
        }
        if (amount >= 50) {
            amount = amount - 50
            coins++
            continue
        }
        if (amount >= 20) {
            amount = amount - 20
            coins++
            continue
        }
        if (amount >= 10) {
            amount = amount - 10
            coins++
            continue
        }
        if (amount >= 5) {
            amount = amount - 5
            coins++
            continue
        }
        if (amount >= 2) {
            amount = amount - 2
            coins++
            continue
        }
        if (amount >= 1) {
            amount = amount - 1
            coins++
        }
    }
    console.log(coins)
}