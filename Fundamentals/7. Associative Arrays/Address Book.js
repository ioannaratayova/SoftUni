function addressBook(arr) {
    let bookAdress = {};
    for (let line of arr) {
        let [name, address] = line.split(":");
        bookAdress[name] = address;
        
    }
    let sorted = Object.entries(bookAdress);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));

    for (let ad of sorted) {
        console.log(`${ad[0]} -> ${ad[1]}`)
    }
}