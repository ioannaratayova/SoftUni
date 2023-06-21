function meetings(arr) {
    let meetings = {};
    for (let line of arr) {
        let [weekday, name] = line.split(" ");

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        }
        else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        
    }
    for (let meet in meetings) {
        console.log(`${meet} -> ${meetings[meet]}`);
    }
}