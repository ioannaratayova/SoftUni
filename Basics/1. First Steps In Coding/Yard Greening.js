function  Yard_Greening([arg1, arg2])  {
    let squareMforGreening = parseFloat(arg1);
    let price_without_discount = squareMforGreening * 7.61;
    let discount = price_without_discount * 0.18;
    let final_price = price_without_discount - discount;
    console.log(`The final price is: ${final_price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
 }