function TradeComission([arg1, arg2]) {
    let nameCity = arg1;
    let salesVolume = parseFloat(arg2);
    if (nameCity == 'Sofia') {
        if (salesVolume >= 0 && salesVolume <= 500) {
            console.log((salesVolume * 0.05).toFixed(2));
        }
        else if ( 500 < salesVolume && salesVolume <= 1000) {
            console.log((salesVolume * 0.07).toFixed(2));
        }
        else if (1000 < salesVolume && salesVolume <= 10000) {
            console.log((salesVolume * 0.08).toFixed(2));
        }
        else if (salesVolume > 10000) {
            console.log((salesVolume * 0.12).toFixed(2));
        }
        else {
            console.log('error');
        }
    }
    else if (nameCity == 'Varna') {
        if (salesVolume >= 0 && salesVolume <= 500) {
            console.log((salesVolume * 0.045).toFixed(2));
        }
        else if ( 500 < salesVolume && salesVolume <= 1000) {
            console.log((salesVolume * 0.075).toFixed(2));
        }
        else if (1000 < salesVolume && salesVolume <= 10000) {
            console.log((salesVolume * 0.1).toFixed(2));
        }
        else if (salesVolume > 10000) {
            console.log((salesVolume * 0.13).toFixed(2));
        }
        else {
            console.log('error');
        }
    }
    else if (nameCity == 'Plovdiv') {
        if (salesVolume >= 0 && salesVolume <= 500) {
            console.log((salesVolume * 0.055).toFixed(2));
        }
        else if ( 500 < salesVolume && salesVolume <= 1000) {
            console.log((salesVolume * 0.08).toFixed(2));
        }
        else if (1000 < salesVolume && salesVolume <= 10000) {
            console.log((salesVolume * 0.12).toFixed(2));
        }
        else if (salesVolume > 10000) {
            console.log((salesVolume * 0.145).toFixed(2));
        }
        else {
            console.log('error');
        }
    }
    else {
        console.log('error');
    }
}