function inventory(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" / ");
        let hero = currentEl[0];
        let level = Number(currentEl[1]);
        let items = currentEl[2];

        let obj = {
            "heroName": hero,
            "heroLevel": level,
            "itemsN": items
        }
        newArr.push(obj);
    }

    newArr.sort((a, b) => a.heroLevel - b.heroLevel);

    for (let a of newArr) {
        console.log(`Hero: ${a.heroName}`);
        console.log(`level => ${a.heroLevel}`);
        console.log(`items => ${a.itemsN}`);
    }
}