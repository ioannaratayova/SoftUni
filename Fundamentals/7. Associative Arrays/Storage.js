function storage(arr) {
    let store = {};
    for (let line of arr) {
        let [item, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (store.hasOwnProperty(item)) {
            store[item] += quantity;
        }
        else {
            store[item] = quantity;
        }
    }
    for (let key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}