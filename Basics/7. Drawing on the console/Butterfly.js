function Butterfly([arg]) {
    let n = Number(arg);
    let halfRowsize = n - 2;
    let interval = " ";
    let int_osnowa = " ".repeat(n - 1);
    for (let i = 1; i <= halfRowsize; i++) {
        if (i % 2 == 1) {
            console.log(`${"*".repeat(n - 2)}\\${interval}/${"*".repeat(n - 2)}`);
        }
        else {
            console.log(`${"-".repeat(n - 2)}\\${interval}/${"-".repeat(n - 2)}`);
        }
    }
    console.log(`${int_osnowa}@`)

    for (let i = 1; i <= halfRowsize; i++) {
        if (i % 2 == 1) {
            console.log(`${"*".repeat(n - 2)}/${interval}\\${"*".repeat(n - 2)}`);
        }
        else {
            console.log(`${"-".repeat(n - 2)}/${interval}\\${"-".repeat(n - 2)}`);
        }
    }
}