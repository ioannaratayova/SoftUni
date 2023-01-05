function SuppliesForSchool([arg1, arg2, arg3, arg4])  {
    let numberOfPen = Number(arg1);
    let NumberOfMarker = Number(arg2);
    let Liters_of_chalkboard_cleaner = Number(arg3);
    let parcent_down = Number(arg4) / 100;
  
    let price_pen = numberOfPen * 5.80;
    let price_markers = NumberOfMarker * 7.20;
    let price_cleaner = Liters_of_chalkboard_cleaner * 1.20;
    let parcent = (price_pen + price_markers + price_cleaner) * parcent_down;
  
    let final_price = (price_cleaner + price_markers + price_pen) - parcent;
    console.log(final_price);
  }