function SummerOutfit(input) {
    let degree = Number(input[0]);
    let timeOfTheDay = input[1];
  
    if (10 <= degree && degree <= 18) {
      if (timeOfTheDay == 'Morning') {
        console.log(`It's ${degree} degrees, get your Sweatshirt and Sneakers.`);
      }
      else if (timeOfTheDay == 'Afternoon' || timeOfTheDay == 'Evening') {
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
      }
    }
    else if (18 < degree && degree <= 24) {
      if (timeOfTheDay == 'Morning' || timeOfTheDay == 'Evening') {
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
      }
      else if (timeOfTheDay == 'Afternoon') {
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
      }
    }
    else if (degree >= 25) {
      if (timeOfTheDay == 'Morning') {
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
      }
      else if (timeOfTheDay == 'Afternoon') {
        console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`);
      }
      else if (timeOfTheDay == 'Evening') {
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
      }
    }
}