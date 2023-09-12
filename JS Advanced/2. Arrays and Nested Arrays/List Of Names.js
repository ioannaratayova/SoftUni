function solve(arr) {
    let sortedNames = arr.sort((a, b) => {
        let nameA = a.toLowerCase(), nameB = b.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
            return 0;
        }
    });

    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`);
    }
}