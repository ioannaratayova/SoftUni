function oddOccurrences(str) {
    let obj = {};
    str = str.toLowerCase()
    let arr = str.split(" ");

    for (let word of arr) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        }
        else {
            obj[word] = 1;
        }
    }
    let array = [];
    for (let key in obj) {
        if (obj[key] % 2 == 1) {
            array.push(key);
        }
    }
    console.log(array.join(" "));
}