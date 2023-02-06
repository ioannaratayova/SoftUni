function password(args) {
    let userName = args[0];
    let password = args[1];
    let data = args[2];
    let index = 3;
    while ( data !== password) {
        data = args[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}