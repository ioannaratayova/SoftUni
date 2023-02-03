function cleverLily([arg1, arg2, arg3]) {
    let yearsLilly = Number(arg1);
    let priceWashingMachine = parseFloat(arg2);
    let priceForToy = Number(arg3);
    let money = 0;
    let toys = 0;
    let allMoney = 0;
    let moneyToys = 0;
    let brotherMoney = 0;
 
    for (let i = 1; i <= yearsLilly; i++) {
       let currentNum = Number(i);
       if (currentNum % 2 == 0) {
          money++;
          allMoney += money * 10;
          brotherMoney += 1;
       }
       else {
          toys++
          moneyToys = priceForToy * toys;
       }
    }
    let saveMoney = moneyToys + (allMoney - brotherMoney);
    if (saveMoney >= priceWashingMachine) {
       console.log(`Yes! ${(saveMoney - priceWashingMachine).toFixed(2)}`);
    }
    else {
       console.log(`No! ${(priceWashingMachine - saveMoney).toFixed(2)}`);
    }
}