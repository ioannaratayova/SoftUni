function examPreparation(args) {
    let badGrades = Number(args[0]);
    let nameProblem = 0;
    let grade = 0;
    let index = 1;
    let skasan = 0;
    let averageScore = 0;
    let lastProblemName = 0;
    
    let brOcenki = 0;
    let sumGrades = 0;


    while(true) {
        nameProblem = args[index];
        if (nameProblem == 'Enough') {
            averageScore = sumGrades / brOcenki;
            lastProblemName = args[index - 2];
            console.log(`Average score: ${(averageScore).toFixed(2)}`);
            console.log(`Number of problems: ${brOcenki}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }
        grade = Number(args[index+1]);
        brOcenki += 1;
        sumGrades += grade;
        if (grade <= 4) {
            skasan += 1
            if (skasan == badGrades) {
                console.log(`You need a break, ${skasan} poor grades.`)
                break;
            }
        }
        index += 2
    }
}