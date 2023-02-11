function Graduation(args) {
    let name = args[0];
    let ocenka = 0;
    let index = 1;
    let averageGrade = 0;
    let ocenki = 0;
    let skasan = 0;
    
    while(true) {
        ocenka = Number(args[index]);
        ocenki += ocenka;
        if (ocenka < 4) {
            skasan += 1;
            if (skasan == 2) {
                console.log(`${name} has been excluded at ${index - 1} grade`);
                break;
            }
        }
        index++
        if(index == args.length) {
            break;
        }
    }
    if (skasan < 2) {
        averageGrade = ocenki / (args.length - 1);
        console.log(`${name} graduated. Average grade: ${(averageGrade).toFixed(2)}`);
    }
}