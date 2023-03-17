function theatrePromotions(arg1, arg2) {
    let typeOfDay = arg1;
    let age = Number(arg2);
    if (age < 0 || age > 122) {
        console.log('Error!');
    }

    if (typeOfDay == 'Weekday') {
        if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
            console.log(`12$`);
        } 
        else if (age > 18 && age <= 64) {
            console.log(`18$`);
        }
    }
    else if (typeOfDay == 'Weekend') {
        if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
            console.log(`15$`);
        }
        else if (age > 18 && age <= 64) {
            console.log(`20$`);
        }
    }
    else if (typeOfDay == 'Holiday') {
        if (age >= 0 && age <= 18) {
            console.log(`5$`);
        }
        else if (age > 18 && age <= 64) {
            console.log(`12$`);
        }
        else if (age > 64 && age <= 122) {
            console.log(`10$`)
        }
    }
}