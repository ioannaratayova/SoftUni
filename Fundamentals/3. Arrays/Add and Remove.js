function addAndRemove(arr) {
    let newArray = [];
    let currentNumber = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            newArray.push(currentNumber);
        }
        else if (arr[i] === 'remove') {
            if (newArray.length > 0) {
                newArray.pop();
            }
        }
        currentNumber++;
    }
    if (newArray.length === 0) {
        console.log('Empty');
    }
    else {
        console.log(newArray.join(" "));
    }
}