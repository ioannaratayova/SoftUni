function FishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFisherman = Number(input[2]);
    let price = 0;

    if (season == 'Spring') {
        if (numberOfFisherman <= 6) {
            price = 3000 - (3000 * 0.10);
        }
        else if (numberOfFisherman >= 7 && numberOfFisherman <= 11) {
            price = 3000 - (3000 * 0.15);
        }
        else if (numberOfFisherman >= 12) {
            price = 3000 - (3000 * 0.25);
        }
        if (numberOfFisherman % 2 == 0) {
            price = price - (price * 0.05);
        }
    }
    else if (season == 'Summer') {
        if (numberOfFisherman <= 6) {
            price = 4200 - (4200 * 0.10);
        }
        else if (numberOfFisherman >= 7 && numberOfFisherman <= 11) {
            price = 4200 - (4200 * 0.15);
        }
        else if (numberOfFisherman >= 12) {
            price = 4200 - (4200 * 0.25);
        }
        if (numberOfFisherman % 2 == 0) {
            price = price - (price * 0.05);
        }
    }
    else if (season == 'Autumn') {
        if (numberOfFisherman <= 6) {
            price = 4200 - (4200 * 0.10);
        }
        else if (numberOfFisherman >= 7 && numberOfFisherman <= 11) {
            price = 4200 - (4200 * 0.15);
        }
        else if (numberOfFisherman >= 12) {
            price = 4200 - (4200 * 0.25);
        }
    }
    else if (season == 'Winter') {
        if (numberOfFisherman <= 6) {
            price = 2600 - (2600 * 0.10);
        }
        else if (numberOfFisherman >= 7 && numberOfFisherman <= 11) {
            price = 2600 - (2600 * 0.15);
        }
        else if (numberOfFisherman >= 12) {
            price = 2600 - (2600 * 0.25);
        }
        if (numberOfFisherman % 2 == 0) {
            price = price - (price * 0.05);
        }
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }
}