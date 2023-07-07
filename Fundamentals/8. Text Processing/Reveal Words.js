function revealWords(someWords, templates) {
    let wordList = someWords.split(", ");
    let templateList = templates.split(" ");

    for (let word of wordList) {
        for (let i = 0; i < templateList.length; i++) {
            if (templateList[i].includes("*") && templateList[i].length === word.length) {
                templateList[i] = word;
            } 
        }
    }
    console.log(templateList.join(" "));
}