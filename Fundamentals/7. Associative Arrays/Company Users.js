function companyUsers(input) {
    let comp = {};

    for (let element of input) {
        let [companyName, ID] = element.split(" -> ");
        if (!comp.hasOwnProperty(companyName)) {
            comp[companyName] = new Set();
        }
        comp[companyName].add(ID);
    }
    let sorted = Object.entries(comp);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));

    for (let el of sorted) {
        console.log(el[0]);
        for (let number of el[1]) {
            console.log(`-- ${number}`);
        }
    }
}