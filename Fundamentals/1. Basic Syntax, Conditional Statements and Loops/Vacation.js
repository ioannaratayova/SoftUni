function vacation(arg1, arg2, arg3) {
    let countOfGroup = Number(arg1);
    let typeOfGroup = arg2;
    let dayOfTheWeek = arg3;
    let priceForOne = 0;
    let all = 0;
    if (typeOfGroup == 'Students') {
        if (dayOfTheWeek == 'Friday') {
            priceForOne = 8.45;
        }
        else if (dayOfTheWeek == 'Saturday') {
            priceForOne = 9.80;
        }
        else if (dayOfTheWeek == 'Sunday') {
            priceForOne = 10.46;
        }
        if (countOfGroup >= 30) {
            all = countOfGroup * priceForOne;
            all -= all * 0.15;
        }
        else {
            all = countOfGroup * priceForOne;
        }
    }
    else if (typeOfGroup == 'Business') {
        if (dayOfTheWeek == 'Friday') {
            priceForOne = 10.90;
        }
        else if (dayOfTheWeek == 'Saturday') {
            priceForOne = 15.60;
        }
        else if (dayOfTheWeek == 'Sunday') {
            priceForOne = 16;
        }
        if (countOfGroup >= 100) {
            all = (countOfGroup - 10) * priceForOne;
        }
        else {
            all = countOfGroup * priceForOne;
        }
    }
    else if (typeOfGroup == 'Regular') {
        if (dayOfTheWeek == 'Friday') {
            priceForOne = 15;
        }
        else if (dayOfTheWeek == 'Saturday') {
            priceForOne = 20;
        }
        else if (dayOfTheWeek == 'Sunday') {
            priceForOne = 22.50;
        }
        if (countOfGroup >= 10 && countOfGroup <= 20) {
            all = countOfGroup * priceForOne;
            all -= all * 0.05;
        }
        else {
            all = countOfGroup * priceForOne;
        }
    }
console.log(`Total price: ${all.toFixed(2)}`)
}