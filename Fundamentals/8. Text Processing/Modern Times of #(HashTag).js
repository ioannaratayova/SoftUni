function modernHashTag(string) {
    let words = string.split(" ");
    let result = [];
    for (let el of words) {
        if (el.startsWith("#") && el.length > 1) {
            let isSpecial = true;
            el = el.substring(1)
            for (let char of el) {
                char = char.toLowerCase();
                if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial) {
                result.push(el)
            }
        }
    }
    console.log(result.join("\n"))
}