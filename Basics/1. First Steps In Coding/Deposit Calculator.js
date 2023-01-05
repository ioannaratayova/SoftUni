function DepositCalculator([arg1, arg2, arg3])  {
    let deposit = parseFloat(arg1);
    let termOfDeposit = Number(arg2);
    let annualInterestRate = parseFloat(arg3) / 100;
    let lihva = deposit * annualInterestRate;
    let mesec_lihva = lihva / 12;
    let all = deposit + termOfDeposit * mesec_lihva;
    console.log(all);
  }