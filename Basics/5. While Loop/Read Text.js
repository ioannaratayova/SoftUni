function readText(args) {
    let index = 0;
    while (true) {
        if (args[index] == 'Stop') {
            break;
        }
        console.log(args[index]);
        index += 1;
    }
}