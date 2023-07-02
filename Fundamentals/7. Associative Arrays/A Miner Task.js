function minerTask(input) {
    let obj = {};
    let resource;
    let quantity;
    for (let i = 0; i < input.length; i+=2) {
        resource = input[i];
        quantity = Number(input[i+1]);
        if (obj.hasOwnProperty(resource)) {
            obj[resource] += quantity;
        }
        else {
            obj[resource] = quantity;
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}