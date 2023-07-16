function matchDates(arr) {
    let regex = /(?<day>\d{2})(?<delimiter>[-.\/])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})/g;
    
    for (let i = 0; i < arr.length; i++) {
        let date = arr[i];
        let match = [...date.matchAll(regex)];
        for (let j = 0; j < match.length; j++) {
            let res = `Day: ${match[j].groups.day}, Month: ${match[j].groups.month}, Year: ${match[j].groups.year}`;
            console.log(res)
        }
    } 
}