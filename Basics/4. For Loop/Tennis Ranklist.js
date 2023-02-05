function tennisRanklist(args) {
    let numberOfComp = Number(args[0]);
    let initialPoints = Number(args[1]);
    let W = 0;
    // let F = 1200;
    // let SF = 720;
    let allPoints = 0;
    
    for (let i = 2; i < args.length; i++) {
       if (args[i] == 'W') {
          allPoints += 2000;
          W += 1;
       }
       else if (args[i] == 'F') {
          allPoints += 1200;
       }
       else if (args[i] == 'SF') {
          allPoints += 720;
       }
    }
    console.log(`Final points: ${allPoints + initialPoints}`);
    console.log(`Average points: ${Math.floor(allPoints / numberOfComp)}`);
    console.log(`${((W / numberOfComp) * 100).toFixed(2)}%`)
}