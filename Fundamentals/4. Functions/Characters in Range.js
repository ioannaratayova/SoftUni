function charactersInRange(n1, n2) {
    let code1 = n1.charCodeAt();
    let code2 = n2.charCodeAt();
    let buff = "";
    if (code1 < code2) {
        for (let i = code1 + 1; i < code2; i++) {
            buff += String.fromCharCode(i) + ' ';
        }
    }
    else {
        for (let i = code2 + 1; i < code1; i++) {
            buff += String.fromCharCode(i) + ' ';
        }
    }
    console.log(buff);
}