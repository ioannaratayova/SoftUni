function SmallShop([arg1, arg2, arg3])  {
    let product = arg1;
    let city = arg2;
    let quantity = Number(arg3);

    if (city == 'Sofia') {
        if (product == 'coffee') {
            console.log(quantity * 0.50);
        }
        else if (product == 'water') {
            console.log(quantity * 0.80);
        }
        else if (product == 'beer') {
            console.log(quantity * 1.20);
        }
        else if (product == 'sweets') {
            console.log(quantity * 1.45);
        }
        else {
            console.log(quantity * 1.60);
        }
    }
    else if (city == 'Plovdiv') {
        if (product == 'coffee') {
            console.log(quantity * 0.40);
        }
        else if (product == 'water') {
            console.log(quantity * 0.70);
        }
        else if (product == 'beer') {
            console.log(quantity * 1.15);
        }
        else if (product == 'sweets') {
            console.log(quantity * 1.30);
        }
        else {
            console.log(quantity * 1.50);
        }
    }
    else {
        if (product == 'coffee') {
            console.log(quantity * 0.45);
        }
        else if (product == 'water') {
            console.log(quantity * 0.70);
        }
        else if (product == 'beer') {
            console.log(quantity * 1.10);
        }
        else if (product == 'sweets') {
            console.log(quantity * 1.35);
        }
        else {
            console.log(quantity * 1.55);
        }
    }
}