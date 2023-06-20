function phoneNumber(arr) {
    let phoneBook = {};
    for (let line of arr) {
        let tokens = line.split(" ");
        let name = tokens[0];
        let number = tokens[1];
        phoneBook[name] = number;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);;
    }
}