function matchPhoneNumber(arr) {
    let regex = /\+359([ -])2\1(?:\d{3})\1(?:\d{4})\b/g;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let match = text.match(regex);
        result = result.concat(match);
    }
    console.log(result.join(", "));
}