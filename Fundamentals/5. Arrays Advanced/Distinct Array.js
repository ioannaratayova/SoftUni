function distinctArray(arr) {
    let currentElement;
    let finalArray = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        currentElement = arr[i];
        if (!finalArray.includes(currentElement)) {
            finalArray.push(currentElement);
        }
    }
    console.log(finalArray.join(" "));
}