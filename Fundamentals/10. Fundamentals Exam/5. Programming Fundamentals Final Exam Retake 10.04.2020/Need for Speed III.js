function needForSpeed(arr) {
    let numOfCars = Number(arr.shift()) 
    function infoCars(name, mileage, fuel) {
        let car = {
            nameOfCar: name,
            mileageOfCar: mileage,
            fuelOfCar: fuel,
            Drive(distace, fuel) {
                if (this.fuelOfCar < fuel) {
                    console.log('Not enough fuel to make that ride');
                }
                else {
                    this.mileageOfCar += distace;
                    this.fuelOfCar -= fuel;
                    console.log(`${this.nameOfCar} driven for ${distace} kilometers. ${fuel} liters of fuel consumed.`)
                }
                if (this.mileageOfCar >= 100000) {
                    console.log(`Time to sell the ${this.nameOfCar}!`);
                    map.delete(this.nameOfCar);
                }
            },
            Refuel(fuel) {
                if (this.fuelOfCar + fuel > 75) {
                    let difference = 75 - this.fuelOfCar;
                    console.log(`${this.nameOfCar} refueled with ${difference} liters`);
                    this.fuelOfCar = 75;
                }
                else {
                    this.fuelOfCar += fuel;
                    console.log(`${this.nameOfCar} refueled with ${fuel} liters`);
                }
            },
            Revert(kilometers) {
                this.mileageOfCar -= kilometers;
                if (this.mileageOfCar < 10000) {
                    this.mileageOfCar = 10000;
                }
                else {
                    console.log(`${this.nameOfCar} mileage decreased by ${kilometers} kilometers`);
                }
            },
            toString() {
                console.log(`${this.nameOfCar} -> Mileage: ${this.mileageOfCar} kms, Fuel in the tank: ${this.fuelOfCar} lt.`);
            }
        }
        return car;
    }
    let map = new Map();
    for (let i = 0; i < numOfCars; i++) {
        let tokens = arr[i].split("|");
        let nameCar = tokens[0];
        let mileageCar = Number(tokens[1]);
        let fuelInTank = Number(tokens[2]);
        let carObj = infoCars(nameCar, mileageCar, fuelInTank);
        map.set(nameCar, carObj);
    }
    for (let i = numOfCars; i < arr.length; i++) {
        let tokens = arr[i].split(" : ");
        let command = tokens[0];
        let name2 = tokens[1];
        if (command == 'Stop') {
            for (let name of map.values()) {
                name.toString();
            }
            break;
        }
        else if (command == 'Drive') {
            let currentCar = map.get(name2);
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            currentCar.Drive(distance, fuel);
        }
        else if (command == 'Refuel') {
            let currentCar = map.get(name2);
            let fuel = Number(tokens[2]);
            currentCar.Refuel(fuel);
        }
        else if (command == 'Revert') {
            let currentCar = map.get(name2);
            let kilometers = Number(tokens[2]);
            currentCar.Revert(kilometers);
        }
    }
}