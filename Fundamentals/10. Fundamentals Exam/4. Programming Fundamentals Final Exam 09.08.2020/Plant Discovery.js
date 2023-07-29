function plantDiscovery(arr) {
    let numberOfPlants = Number(arr.shift());
    let obj = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [plant, rarity] = arr[i].split("<->");
        obj[plant] = [rarity, []];
    }
    
    for (let i = numberOfPlants; i < arr.length; i++) {
        if (arr[i] == 'Exhibition') {
            break;
        }
        let command = arr[i].split(": ");
        let info;
        if (command.length == 1){
            console.log('error')
            continue
        }
        info = command[1].split(" - ");
        if (!(info[0] in obj)) {
            console.log('error');
            continue;
        }
        if (command[0] == 'Rate') {
            obj[info[0]][1].push(Number(info[1]));
        }
        else if (command[0] == 'Update') {
            obj[info[0]][0] = Number(info[1]);
        }
        else if (command[0] == 'Reset') {
            obj[info[0]][1] = [];
        }
    }
    console.log("Plants for the exhibition:");
    for (let line in obj) {
        let averageRating;
        if (obj[line][1].length > 0) {
            let sum1 = obj[line][1].reduce((a, b) => a + b);
            averageRating = sum1 / obj[line][1].length;
        }
        else {
            averageRating = 0
        }
        
        console.log(`- ${line}; Rarity: ${obj[line][0]}; Rating: ${averageRating.toFixed(2)}`);
    }
}