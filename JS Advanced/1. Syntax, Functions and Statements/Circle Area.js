function solve(arg1) {
    let inputType = typeof(arg1);
    let area;
    if (inputType === "number") {
        area = Math.pow(arg1, 2) * Math.PI;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}