function train(arr) {
    let arrOfNumbers = (arr.shift()).split(" ").map(Number);
    let maxCapacity = Number(arr[0]);
    let currentElement;
    
    for (let i = 1; i < arr.length; i++) {
        currentElement = arr[i].split(" ");
        if (currentElement[0] == 'Add') {
            arrOfNumbers.push(Number(currentElement[1]));
        }
        else {
            for (let j = 0; j < arrOfNumbers.length; j++) {
                if (Number(currentElement) + arrOfNumbers[j] <= maxCapacity) {
                    arrOfNumbers[j] += Number(currentElement);
                    break;
                }
            }
        }
    }
    console.log(arrOfNumbers.join(" "));
}