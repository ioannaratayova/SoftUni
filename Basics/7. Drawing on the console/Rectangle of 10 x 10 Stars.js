function Rectangleof10x10Stars() {
    let stars = "";
    for (let row = 1; row <= 10; row++) {
        stars = ""
        for (let col = 1; col <= 10; col++) {
            stars += "*";
        }
        console.log(stars);
    }
}