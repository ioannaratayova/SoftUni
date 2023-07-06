function countOccurrences(text, word) {
    let count = 0;
    let texttt = text.split(" ")
    for (let w of texttt) {
        if (w == word) {
            count++;
        }
    }
    console.log(count);
}