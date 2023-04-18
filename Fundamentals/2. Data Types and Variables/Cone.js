function cone(radius, height) {
    let volume = ((Math.PI * radius * radius * height) / 3).toFixed(4);
    let lengthOfSlant = Math.sqrt((radius * radius) + (height * height));
    let area = ((Math.PI * radius * lengthOfSlant) + (Math.PI * radius * radius)).toFixed(4);
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}