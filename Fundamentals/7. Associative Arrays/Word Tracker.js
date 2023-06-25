function wordsTracker(arr) {
    let wordsToCheck = arr[0].split(" ");
    let obj = {};
    for (let word of wordsToCheck) {
        obj[word] = 0;
    }
    for (let i = 1; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        }
    }
    let sorted = Object.entries(obj);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let line of sorted) {
        console.log(`${line[0]} - ${line[1]}`)
    }
}