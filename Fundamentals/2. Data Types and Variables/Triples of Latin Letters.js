function triplesOfLatinLetters(arg1) {
    let num = Number(arg1);
    for (let i = 0; i < num; i++) {
        let first = String.fromCharCode(i + 97);
        for (let j = 0; j < num; j++) {
            let second = String.fromCharCode(j + 97);
            for (let k = 0; k < num; k++) {
                let third = String.fromCharCode(k + 97);
                console.log(`${first}${second}${third}`);
            }
        }
    }
}