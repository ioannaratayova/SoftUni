function worldTour(str) {
    let string = str.shift();

    for (let line of str) {
        if (line == 'Travel') {
            break;
        }
        let commands = line.split(":");
        let index = Number(commands[1]);
        let destination = commands[2];

        if (commands[0] == 'Add Stop') {
            if (index >= 0 && index < string.length) {
                string = string.slice(0, index) + destination + string.slice(index);
            }
            console.log(string);
        }
        else if (commands[0] == 'Remove Stop') {
            let index1 = Number(commands[1]);
            let index2 = Number(commands[2]);
            if (index1 >= 0 && index1 < string.length && index2 >= 0 && index2 < string.length) {
                string = string.slice(0, index1) + string.slice(index2 + 1);
            }
            console.log(string);
        }
        else if (commands[0] == 'Switch') {
            let oldString = commands[1];
            let newString = commands[2];
            if (string.includes(oldString)) {
                string = string.split(oldString).join(newString);
            }
            console.log(string);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${string}`);
}