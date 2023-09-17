function solve(arr) {
    let obj = {};

    for (let el of arr) {
        let [city, population] = el.split(' <-> ');

        if (obj.hasOwnProperty(city)) {
            obj[city] +=Number(population);
        }
        else {
            obj[city] = Number(population);
        }
    }
    for (let item in obj) {
        console.log(`${item} : ${obj[item]}`)
    }
}