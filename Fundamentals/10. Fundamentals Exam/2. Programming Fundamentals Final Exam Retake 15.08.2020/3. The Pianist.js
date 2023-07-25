function thePianist(input) {
    let catalog = {};
    let numberOfPieses = Number(input.shift());
 
    for(let i = 0; i < numberOfPieses; i++) {
        let [name, composer, key] = input.shift().split('|');
 
        catalog[name] = {
            composer, 
            key
        }
    }
 
    while (input[0] != "Stop") {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];
         if(command == "Add") {
            if(catalog[name] != undefined) {
                console.log(`${name} is already in the collection!`)
            } else {
                catalog[name] = {
                    composer: tokens[2],
                    key: tokens[3]
                };
 
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`)
            }
 
        }  else  if(command == "Remove") {
            if(catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            } else {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`)
            }
        } else if(command == "ChangeKey") {
            if(catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                catalog[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`)
            }
        }
    }
    for (let [name, piece] of Object.entries(catalog)) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`)
    }
}