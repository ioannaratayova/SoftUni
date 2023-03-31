function login(input) {
    let username = input[0];
    let buffWord = "";

    for (let i = username.length - 1; i >= 0; i--) {
        buffWord += username[i];
    }

    incorrectPasswordCount = 0;

    for (let i = 1; i < input.length; i++) {
        let tempPassword = input[i];
        
        if (tempPassword === buffWord) {
            console.log(`User ${username} logged in.`);
        }
        else {
            incorrectPasswordCount++;
            if (incorrectPasswordCount === 4) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log('Incorrect password. Try again.')
        }
    }
}