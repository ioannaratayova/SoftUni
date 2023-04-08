function rightPlace(str, letter, word) {
    let res = str.replace('_', letter);
    let output = res === word? "Matched": "Not Matched";
    console.log(output);
}