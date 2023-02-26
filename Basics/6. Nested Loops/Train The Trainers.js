function solve(args) {
    let n = Number(args[0]);
    let namePresentation = args[1];
    let index = 2;

    let presentationCounter = 0;
    let totalGrades = 0;

    while(namePresentation != 'Finish') {
        presentationCounter += 1;
        let counter = index;
        let currentGrades = 0;

        for (let i = counter; i < counter + n; i++) {
            index++
            currentGrades += Number(args[i]);
        }

        let averageGrade = currentGrades / n;

        console.log(`${namePresentation} - ${averageGrade.toFixed(2)}.`);

        totalGrades += averageGrade;
        namePresentation = args[index];
        index++;
    }
    let totalGradePrint = totalGrades / presentationCounter;
    console.log(`Student's final assessment is ${totalGradePrint.toFixed(2)}.`);
}