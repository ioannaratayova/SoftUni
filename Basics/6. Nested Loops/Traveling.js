function solve(args) {
    let destination = args[0];
    let budget = Number(args[1]);
    let index = 2;
    let saveMoney = 0;

    while(true) {
        saveMoney += Number(args[index]);
        if (destination == 'End') {
            break;
        }
        if (saveMoney >= budget) {
            console.log(`Going to ${destination}!`);
            if (args[index + 1] == 'End') {
                break;
            }
            destination = args[index + 1];
            budget = Number(args[index + 2]);
            index += 3;
            saveMoney = 0;
            continue;
        }
        index++
    }
}