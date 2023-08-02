function passwordReset(arr) {
    let str = arr.shift();

    for (let line of arr) {
        let elements = line.split(" ");
        let command = elements[0];
        if (command == 'Done') {
            console.log(`Your password is: ${str}`);
        }

        if (command == 'TakeOdd') {
            let stringOdd = "";
            for (let i = 0; i < str.length; i++) {
                if (i % 2 == 1) {
                    stringOdd += str[i];
                }
            }
            str = stringOdd;
            console.log(str)
        }
        else if (command == 'Cut') {
            let index = Number(elements[1]);
            let length = Number(elements[2]);
            let firstPart = str.substring(0,index);
            let secondPart = str.substring(index + length);
            str = firstPart + "" + secondPart;
            console.log(str)
        }
        else if (command == 'Substitute') {
            let substring = elements[1];
            let substitute = elements[2];
            if (str.includes(substring)) {
                str = str.split(substring).join(substitute);
                console.log(str);
            }
            else {
                console.log("Nothing to replace!");
            }
        }
    }
}