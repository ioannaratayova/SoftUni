function ToyShop([arg1, arg2, arg3, arg4, arg5, arg6])  {
    let cena_ekskurziq = parseFloat(arg1);
    let br_pyzeli = Number(arg2);
    let br_kukli = Number(arg3);
    let pl_meche = Number(arg4);
    let min = Number(arg5);
    let kamioncheta = Number(arg6);
    let all_toys = br_pyzeli + br_kukli + pl_meche + min + kamioncheta;
    let ots = 0;
    let profit = (br_pyzeli * 2.6) + (br_kukli * 3) + (pl_meche * 4.10) + (min * 8.2) + (kamioncheta * 2);
  
    if (all_toys >= 50) {
      ots = profit * 0.25;
      profit -= ots;
    }
    let naem = profit * 0.10;
    profit = profit - naem;
    if (profit >= cena_ekskurziq) {
      profit -= cena_ekskurziq;
      console.log(`Yes! ${(profit).toFixed(2)} lv left.`)
    }
    else {
      cena_ekskurziq -= profit
      console.log(`Not enough money! ${(cena_ekskurziq).toFixed(2)} lv needed.`)
    }
  }