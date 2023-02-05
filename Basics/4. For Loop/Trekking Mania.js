function trekkingMania(args) {
    let allPeople = 0;
    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    
    for (let i = 1; i < args.length; i++) {
       allPeople += Number(args[i]);
       if (args[i] <= 5) {
          Musala += Number(args[i]);
       }
       else if (args[i] >= 6 && args[i] <= 12) {
          Monblan += Number(args[i]);
       }
       else if (args[i] >= 13 && args[i] <= 25) {
          Kilimandjaro += Number(args[i]);
       }
       else if (args[i] >= 26 && args[i] <= 40) {
          K2 += Number(args[i]);
       }
       else if (args[i] >= 41) {
          Everest += Number(args[i]);
       }
    }
    console.log(((Musala / allPeople) * 100).toFixed(2) + '%');
    console.log(((Monblan / allPeople) * 100).toFixed(2) + '%');
    console.log(((Kilimandjaro / allPeople) * 100).toFixed(2) + '%');
    console.log(((K2 / allPeople) * 100).toFixed(2) + '%');
    console.log(((Everest / allPeople) * 100).toFixed(2) + '%');
}