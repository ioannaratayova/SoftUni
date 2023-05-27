function arrayManipulations(arr) {
    let arrOfNumbers = (arr.shift()).split(" ");
    let currentElement;
    let num = 0;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        currentElement = arr[i].split(" ");

        if (currentElement[0] == 'Add') {
            num = Number(currentElement[1]);
            arrOfNumbers.push(num);
        }
        else if (currentElement[0] == 'Remove') {
            num = Number(currentElement[1]);
            arrOfNumbers = arrOfNumbers.filter(el => el != num);
        }
        else if (currentElement[0] == 'RemoveAt') {
            index = Number(currentElement[1]);
            arrOfNumbers.splice(index, 1);
        }
        else if (currentElement[0] == 'Insert') {
            num = Number(currentElement[1]);
            index = Number(currentElement[2]);
            arrOfNumbers.splice(index, 0, num);
        }
    }
    console.log(arrOfNumbers.join(" "));
}