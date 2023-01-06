function FoodDelivery([arg1, arg2, arg3])  {
    let chicken_menu = Number(arg1);
    let fish_menu = Number(arg2);
    let vegetarian_menu = Number(arg3);

    let money_chicken = chicken_menu * 10.35;
    let money_fish = fish_menu * 12.40;
    let money_vegetarian = vegetarian_menu * 8.15;
    let delivery = 2.50;

    let dessert = (money_chicken + money_fish + money_vegetarian) * 0.20;
    let all = money_chicken + money_fish + money_vegetarian + delivery + dessert;

    console.log(all);
}