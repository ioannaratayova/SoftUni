function Cinema(input) {
    let typeOfMovie = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    if (typeOfMovie == 'Premiere') {
        console.log((rows * columns * 12).toFixed(2));
    }
    else if (typeOfMovie == 'Normal') {
        console.log((rows * columns * 7.50).toFixed(2));
    }
    else {
        console.log((rows * columns * 5).toFixed(2));
    }
}