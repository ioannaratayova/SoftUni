function stringSubstring(word, text) {
    let text1 = text.toLowerCase();
    let word1 = word.toLowerCase();
    text1 = text1.split(" ")
    if (text1.includes(word1)) {
        console.log(word);
        return;
    }
    else {
        console.log(`${word} not found!`)
    }
}