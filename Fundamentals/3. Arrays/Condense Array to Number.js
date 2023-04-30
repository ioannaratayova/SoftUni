function condenseArray(numbers) {
    while (numbers.length > 1) {
      for (let i = 0; i < numbers.length - 1; i++) {
        numbers[i] = numbers[i] + numbers[i + 1];
      }
      numbers.pop();
    }
    console.log(numbers[0]);
}