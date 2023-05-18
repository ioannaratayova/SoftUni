function perfectNumber(n) {
    let currentNum = 0;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        currentNum = Number(i);
        if (n % currentNum == 0) {
            sum += currentNum;
        }
    }
    if (sum == n) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.")
    }
}