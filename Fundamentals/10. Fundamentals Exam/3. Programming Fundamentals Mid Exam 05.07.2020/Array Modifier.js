function arrModifier(arr) {
    let workArr = arr.shift().split(" ").map(Number);
    let modifier = "";
    let index1 = 0;
    let index2 = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" ");
        modifier = currentEl[0];
        index1 = Number(currentEl[1]);
        index2 = Number(currentEl[2]);

        if (modifier == 'end') {
            break;
        }

        if (modifier == 'swap') {
            let temp = workArr[index1];
            workArr[index1] = workArr[index2];
            workArr[index2] = temp;
        }
        else if (modifier == 'multiply') {
            let sum = workArr[index1] * workArr[index2];
            workArr[index1] = sum;
        }
        if (modifier == "decrease") {
            for (let i = 0; i < workArr.length; i++) {
                workArr[i] -= 1;
            }
        }
    }
    console.log(workArr.join(", "));
}