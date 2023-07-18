function race(arr) {
    let list = arr.shift().split(", ");
    let patternName = /[a-zA-Z]+/g;
    let patternKm = /\d+/g;
    let objRace = {};
    let places = ['opa','1st place:', '2nd place:', '3rd place:'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'end of race') {
            break;
        }
        let digits = arr[i].match(patternKm);
        let name = arr[i].match(patternName);
        name = name.join("");
        let d1 = '';
        let sum = 0;
        for (let num of digits) {
            d1 += num;
        }
        for (let num1 of d1) {
            sum += Number(num1);
        }

        if (list.includes(name)) {
            
            if (name in objRace) {
                objRace[name] += sum;
            }
            else {
                objRace[name] = sum;
            }
        }
    }    
    let sortedObj = Object.fromEntries(Object.entries(objRace).sort((a, b) => b[1] - a[1]));
    let counter = 0;
    for (let human in sortedObj) {
        counter++;
        console.log(`${places[counter]} ${human}`);
        if (counter == 3) {
            break;
        }
    }
}