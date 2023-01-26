function NewHouse(input) {
    let typeOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let final_price = 0;
    let discount = 0;
    if (typeOfFlowers == 'Roses') {
      if (numberOfFlowers > 80) {
        discount = ((numberOfFlowers * 5) * 0.10);
        final_price = (numberOfFlowers * 5) - discount;
      }
      else {
        final_price = numberOfFlowers * 5;
      }
    }
    else if (typeOfFlowers == 'Dahlias') {
      if (numberOfFlowers > 90) {
        discount = ((numberOfFlowers * 3.80) * 0.15);
        final_price = (numberOfFlowers * 3.80) - discount;
      }
      else {
        final_price = numberOfFlowers * 3.80;
      }
    }
    else if (typeOfFlowers == 'Tulips') {
      if (numberOfFlowers > 80) {
        discount = ((numberOfFlowers * 2.80) * 0.15);
        final_price = (numberOfFlowers * 2.80) - discount;
      }
      else {
        final_price = numberOfFlowers * 2.80;
      }
    }
    else if (typeOfFlowers == 'Narcissus') {
      if (numberOfFlowers < 120) {
        discount = ((numberOfFlowers * 3) * 0.15);
        final_price = (numberOfFlowers * 3) + discount;
      }
      else {
        final_price = numberOfFlowers * 3;
      }
    }
    else if (typeOfFlowers == 'Gladiolus') {
      if (numberOfFlowers < 80) {
        discount = ((numberOfFlowers * 2.50) * 0.20);
        final_price = (numberOfFlowers * 2.50) + discount;
      }
      else {
        final_price = numberOfFlowers * 2.50;
      }
    }
  
    if (budget >= final_price) {
      console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${(budget - final_price).toFixed(2)} leva left.`);
    }
    else {
      console.log(`Not enough money, you need ${(Math.abs(budget - final_price)).toFixed(2)} leva more.`)
    }
  }