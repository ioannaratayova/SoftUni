function HotelRoom(input) {
    let month = input[0];
    let numberOfOvernightStay = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;
    let finalPriceS = 0;
    let finalPriceA = 0;

    if (month == 'May' || month == 'October') {
        if (numberOfOvernightStay > 14) {
            priceStudio = 50 * numberOfOvernightStay;
            finalPriceS = priceStudio - (priceStudio * 0.30);
            priceApartment = 65 * numberOfOvernightStay;
            finalPriceA = priceApartment - (priceApartment * 0.10);
        }
        else if (numberOfOvernightStay > 7) {
            priceStudio = 50 * numberOfOvernightStay;
            finalPriceS = priceStudio - (priceStudio * 0.05);
            priceApartment = 65 * numberOfOvernightStay;
            finalPriceA = priceApartment;
        }
        else {
            finalPriceS = 50 * numberOfOvernightStay;
            finalPriceA = 65 * numberOfOvernightStay;
        }
    }
    else if (month == 'June' || month == 'September') {
        if (numberOfOvernightStay > 14) {
            priceStudio = 75.20 * numberOfOvernightStay;
            finalPriceS = priceStudio - (priceStudio * 0.20);
            priceApartment = 68.70 * numberOfOvernightStay;
            finalPriceA = priceApartment - (priceApartment * 0.10);
        }
        else {
            finalPriceS = 75.20 * numberOfOvernightStay;
            finalPriceA = 68.70 * numberOfOvernightStay;
        }
    }
    else if (month == 'July' || month == 'August') {
        if (numberOfOvernightStay > 14) {
            priceApartment = 77 * numberOfOvernightStay;
            finalPriceA = priceApartment - (priceApartment * 0.10);
            finalPriceS = 76 * numberOfOvernightStay;
        }
        else {
            finalPriceS = 76 * numberOfOvernightStay;
            finalPriceA = 77 * numberOfOvernightStay;
        }
    }
    console.log(`Apartment: ${finalPriceA.toFixed(2)} lv.`);
    console.log(`Studio: ${finalPriceS.toFixed(2)} lv.`)
}