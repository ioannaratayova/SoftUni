function destinationMapper(str) {
    let pattern = /([=/]{1})(?<dest>[A-Z]{1}[A-Za-z]{2,})\1/g;
    let destinations = [];
    let sum = 0;
    let matches = str.matchAll(pattern);
    for (let match of matches) {
        destinations.push(match.groups.dest);;
    }
    console.log(`Destinations: ${destinations.join(", ")}`);
    for (let dest1 of destinations) {
        sum += dest1.length;
    }
    console.log(`Travel Points: ${sum}`)
}