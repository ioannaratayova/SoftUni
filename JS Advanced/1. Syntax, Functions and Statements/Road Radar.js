function solve(km, area) {
    let kmH = Number(km);
    let difference = 0;
    let status;
    let speedLimit;

    if (area == 'motorway') {
        speedLimit = 130
        if (kmH > speedLimit) {
            difference = kmH - speedLimit;
            if (difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else if (kmH <= speedLimit) {
            console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`);
        }
    }
    else if (area == 'interstate') {
        speedLimit = 90
        if (kmH > speedLimit) {
            difference = kmH - speedLimit;
            if (difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else if (kmH <= speedLimit) {
            console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`);
        }
    }
    else if (area == 'city') {
        speedLimit = 50;
        if (kmH > speedLimit) {
            difference = kmH - speedLimit;
            if (difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else if (kmH <= speedLimit) {
            console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`);
        }
    }
    else if (area == 'residential') {
        speedLimit = 20;
        if (kmH > speedLimit) {
            difference = kmH - speedLimit;
            if (difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else if (kmH <= speedLimit) {
            console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`);
        }
    }
}