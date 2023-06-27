function piccolo(data) {
    let parking = new Map();
    for (let carData of data) {
        let [direction, carNumber] = carData.split(", ");
        if (direction == 'IN') {
            parking.set(carNumber, "");
        }
        else {
            parking.delete(carNumber);
        }
    }
    let sort = Array.from(parking).sort((a, b) => a[0].localeCompare(b[0]));
    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    }
    else {
        for (let carNumber of sort) {
            console.log(carNumber[0]);
        }
    }
}