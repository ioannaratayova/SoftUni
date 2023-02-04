function Oscars(args) {
    let nameActor = args[0];
    let pointsOfAcademy = parseFloat(args[1]);
  
    for (let i = 3; i < args.length; i+=2) {
        let evaluator = args[i];
        let evaluation = args[i+1];
        let currentevaluation = ((evaluator.length * evaluation) / 2);
        pointsOfAcademy += currentevaluation
        if (pointsOfAcademy > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${(pointsOfAcademy).toFixed(1)}!`);
            break;
     }
    }
    if (pointsOfAcademy < 1250.5) {
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - pointsOfAcademy).toFixed(1)} more!`);
    }
}