function vacation(args) {
    let nujniPari = parseFloat(args[0]);
    let nalichniPari = parseFloat(args[1]);
    let spend = 0;
    let SaveSpend = 0;
    let money = 0;
    let days = 0;
    let index = 2;

    while(true) {
        SaveSpend = args[index];
        money = Number(args[index+1]);
        days += 1;
        if (SaveSpend == 'spend') {
            spend += 1;
            if (spend == 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
            if (nalichniPari < money) {
                nalichniPari = 0;
            }
            else {
                nalichniPari -= money;
            }
        }
        else if (SaveSpend == 'save') {
            nalichniPari += money;
            spend = 0;
        }
        
        if (nalichniPari >= nujniPari) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index+=2
    }
}