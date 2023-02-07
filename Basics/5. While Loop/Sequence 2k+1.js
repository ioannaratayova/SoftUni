function Sequence2k1([arg1]) {
    let n = Number(arg1);
    let currentNumber = 1;

    while(true) {
        if (currentNumber > n) {
            break;
        }
      console.log(currentNumber);
      currentNumber = currentNumber * 2 + 1;  
    }
}