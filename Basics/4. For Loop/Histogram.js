function Histogram(input) {
    let firstRange = 0;
    let secondRange = 0;
    let thirdRange = 0;
    let forthRange = 0;
    let fifthRange = 0;
 
    for (let i = 1; i <= input.length; i++) {
       let currentNumber = Number(input[i]);
       if (currentNumber < 200) {
          firstRange++;
       }
       else if (currentNumber < 400) {
          secondRange++;
       }
       else if (currentNumber < 600) {
          thirdRange++;
       }
       else if (currentNumber < 800) {
          forthRange++;
       }
       else if (currentNumber >= 800) {
          fifthRange++;
       }
    }
    console.log(`${(firstRange/(input.length - 1) * 100).toFixed(2)}%`);
    console.log(`${(secondRange/(input.length - 1) * 100).toFixed(2)}%`);
    console.log(`${(thirdRange/(input.length - 1) * 100).toFixed(2)}%`);
    console.log(`${(forthRange/(input.length - 1) * 100).toFixed(2)}%`);
    console.log(`${(fifthRange/(input.length - 1) * 100).toFixed(2)}%`);
}