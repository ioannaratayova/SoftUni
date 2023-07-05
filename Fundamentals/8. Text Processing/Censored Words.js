function censoredWord(text, word) {
    word = word.toLowerCase();
    while(text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length));
    }
    console.log(text);
}