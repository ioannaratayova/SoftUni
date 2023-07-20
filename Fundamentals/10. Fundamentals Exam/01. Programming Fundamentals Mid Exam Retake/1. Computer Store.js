function computerStore(input) {
    let priceWithoutTax = 0;
    let taxes = 0;
    let totalPrice = 0;
    let currentThing = 0;
    let client = input.pop();

    for (let num of input) {
        currentThing = Number(num);
        if (currentThing < 0) {
            console.log("Invalid price!");
            continue;
        }
        else {
            priceWithoutTax += currentThing;
        }
    }
    if (priceWithoutTax == 0) {
        console.log('Invalid order!');
    }
    else {
        taxes = priceWithoutTax * 0.20;
        totalPrice = taxes + priceWithoutTax;
        if (client == 'special') {
            totalPrice -= totalPrice * 0.10;
        }
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithoutTax.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
    }
}