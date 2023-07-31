function mirrorWords(arr) {
    let regex = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g;
    let count = 0;
    let results = [];
    for (let text of arr) {
        let matches = text.matchAll(regex);
        for (let match of matches) {
            count++;
            let leftWord = match.groups['word1'];
            let rightWord = match.groups['word2'];
            let reversedRight = reverseStr(rightWord);
            if (leftWord == reversedRight) {
                results.push(`${leftWord} <=> ${rightWord}`);
            }
        }
    }
    if (count == 0) {
        console.log('No word pairs found!');
    }
    else {
        console.log(`${count} word pairs found!`);
    }
    
    if (results.length == 0) {
        console.log('No mirror words!');
    }
    else {
        console.log(`The mirror words are:\n${results.join(', ')}`);
    }
    function reverseStr(text) {
        let reversed = '';
        for (let i = text.length - 1; i >= 0; i--) {
            reversed += text[i];
        }
        return reversed;
    }
}