function searchForNumber(arr, arr2) {
    let newArray = [];
    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1];
    let numberWeSearch = arr2[2];
    let counter = 0;

    newArray = arr.slice(0, elementsToTake);
    newArray.splice(0, elementsToDelete);
    
    for (let num of newArray) {
        if (num == numberWeSearch) {
            counter++;
        }
    }
    console.log(`Number ${numberWeSearch} occurs ${counter} times.`);
}