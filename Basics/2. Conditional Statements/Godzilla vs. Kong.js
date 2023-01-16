function godzillaVSKong([arg1, arg2, arg3])  {
    let budget = parseFloat(arg1);
    let statisti = Number(arg2);
    let price_for_clothes = parseFloat(arg3);
    let all_clothes = price_for_clothes * statisti;
    let decor = budget * 0.10;
     if (statisti >= 150) {
      all_clothes -= all_clothes * 0.10;
     }
     let final_price = all_clothes + decor;
     if (final_price <= budget) {
      console.log('Action!');
      console.log(`Wingard starts filming with ${(budget - final_price).toFixed(2)} leva left.`);
     }
     else {
      console.log('Not enough money!');
      console.log(`Wingard needs ${(final_price - budget).toFixed(2)} leva more.`);
     }
  }