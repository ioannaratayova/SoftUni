function schoolGrades(arr) {
    let grades = {};
    for (let student of arr) {
        let [name, ...studentGrades] = student.split(" ");
        if (grades[name]) {
            grades[name].grades.push(...studentGrades.map(Number));
        }
        else {
            grades[name] = { grades: studentGrades.map(Number) };
        }
    }
    let sortedNames = Object.keys(grades).sort();
    let averages = {};
    for (let name of sortedNames) {
        let total = grades[name].grades.reduce((acc, curr) => acc + curr, 0);
        let average = total / grades[name].grades.length;
        averages[name] = average.toFixed(2);
    }

    for (let line in averages) {
        console.log(`${line}: ${averages[line]}`)
    }
}