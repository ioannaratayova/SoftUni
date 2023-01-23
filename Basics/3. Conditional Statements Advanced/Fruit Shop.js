function FruitShop([arg1, arg2, arg3])  {
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    if (day == 'Saturday' || day == 'Sunday') {
      if (fruit == 'banana') {
        console.log((quantity * 2.70).toFixed(2));
      }
      else if (fruit == 'apple') {
        console.log((quantity * 1.25).toFixed(2));
      }
      else if (fruit == 'orange') {
        console.log((quantity * 0.90).toFixed(2));
      }
      else if (fruit == 'grapefruit') {
        console.log((quantity * 1.60).toFixed(2));
      }
    else if (fruit == 'kiwi') {
        console.log((quantity * 3).toFixed(2));
      }
        else if (fruit == 'pineapple') {
        console.log((quantity * 5.60).toFixed(2));
      }
        else if (fruit == 'grapes') {
        console.log((quantity * 4.20).toFixed(2));
      }
        else {
        console.log('error')
      }
    }
    else if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        if (fruit == 'banana') {
        console.log((quantity * 2.50).toFixed(2));
      }
      else if (fruit == 'apple') {
          onsole.log((quantity * 1.20).toFixed(2));
      }
      else if (fruit == 'orange') {
        console.log((quantity * 0.85).toFixed(2));
      }
      else if (fruit == 'grapefruit') {
        console.log((quantity * 1.45).toFixed(2));
      }
      else if (fruit == 'kiwi') {
        console.log((quantity * 2.70).toFixed(2));
      }
      else if (fruit == 'pineapple') {
        console.log((quantity * 5.50).toFixed(2));
      }
      else if(fruit == 'grapes') {
        console.log((quantity * 3.85).toFixed(2));
      }
      else {
        console.log('error')
      }
    }
    else {
        console.log('error');
    }
}