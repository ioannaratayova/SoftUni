function houseParty(arr) {
    let currentName;
    let currentElement;
    let list = [];
    
    for (let i = 0; i < arr.length; i++) {
        currentElement = arr[i].split(" ");
        currentName = currentElement[0];
        if (currentElement.length == 3) {
            if (!list.includes(currentName)) {
                list.push(currentName);
            }
            else {
                console.log(`${currentName} is already in the list!`);
            }
        }
        else {
            if (list.includes(currentName)) {
                let neshtoSi = list.indexOf(currentName)
                list.pop(neshtoSi);
            }
            else {
                console.log(`${currentName} is not in the list!`)
            }
        }
    }
    console.log(list.join("\n"));
}