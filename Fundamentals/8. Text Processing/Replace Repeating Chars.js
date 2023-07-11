function replaceRepeatingChars(str) {
    let result = '';
    let char = '';
    for (let i = 0; i < str.length; i++) {
        let currentEl = str[i];
        if (currentEl !== char) {
            result += currentEl;
            char = currentEl;
        }
    }
    console.log(result);
}