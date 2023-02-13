function Walking(args) {
    let steps = 0;
    let index = 0;
    let allSteps = 0;
    let diff = 0;
    while(true) {
     if (args[index] == 'Going home') {
         allSteps += Number(args[index + 1]);
         if (allSteps >= 10000) {
             diff = allSteps - 10000;
             console.log(`Goal reached! Good job!`);
             console.log(`${diff} steps over the goal!`)
         break;
            }
         diff = 10000 - allSteps;
         console.log(`${diff} more steps to reach goal.`);
         break;
        }  
     steps = Number(args[index]);
     allSteps += steps;
     if (allSteps >= 10000) {
             diff = allSteps - 10000;
             console.log(`Goal reached! Good job!`);
             console.log(`${diff} steps over the goal!`)
         break;
        }
     index++
    }
 }