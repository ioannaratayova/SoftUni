function matchFullName(text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = text.match(regex);
    console.log(result.join(" "));
}