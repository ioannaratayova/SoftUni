function requiredReading(arg1, arg2, arg3) {
    let numOfPages = Number(arg1);
    let pagesPer1 = Number(arg2);
    let numOfDays = Number(arg3);
    let total = numOfPages / pagesPer1;
    console.log(total / numOfDays)
}