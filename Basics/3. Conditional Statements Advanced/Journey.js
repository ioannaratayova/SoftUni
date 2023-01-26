function Journey(input) {
    let budget = parseFloat(input[0]);
    let season = input[1];
    let destination = 0;
    let priceHoliday = 0;
    let typeHoliday = 0;


    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            priceHoliday = (budget * 0.30).toFixed(2);
            typeHoliday = 'Camp';
        }
        else if (season == 'winter') {
            priceHoliday = (budget * 0.70).toFixed(2);
            typeHoliday = 'Hotel';
        }
    }
    else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            priceHoliday = (budget * 0.40).toFixed(2);
            typeHoliday = 'Camp';
        }
        else if (season == 'winter') {
            priceHoliday = (budget * 0.80).toFixed(2);
            typeHoliday = 'Hotel';
        }
    }
    else if (budget > 1000) {
        destination = 'Europe';
        typeHoliday = 'Hotel';
        priceHoliday = (budget * 0.90).toFixed(2);
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeHoliday} - ${priceHoliday}`)
}