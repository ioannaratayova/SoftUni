function BasketballEquipment([arg1])  {
    let annual_fee = Number(arg1);
    let sneakers = annual_fee - (annual_fee * 0.40);
    let outfit = sneakers - (sneakers * 0.20);
    let ball = outfit / 4;
    let accessories = ball / 5;
    let final_money = annual_fee + sneakers + outfit + ball + accessories;
    console.log(final_money);
}