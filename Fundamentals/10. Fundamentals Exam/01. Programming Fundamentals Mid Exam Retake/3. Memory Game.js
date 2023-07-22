function memoryGame(arr) {
    let sequence = arr.shift().split(" ");
    let index1 = 0;
    let index2 = 0;
    let validIndex = false;
    let moves = 0;

    for (let i = 0; i < arr.length; i++) {
        validIndex = false;
        if (arr[i] == 'end' && sequence.length > 0) {
            console.log('Sorry you lose :(');
            console.log(sequence.join(" "));
            break;
        }
        
        moves++;
        let currentEl = arr[i].split(" ");
        index1 = Number(currentEl[0]);
        index2 = Number(currentEl[1]);
        if (index1 >= 0 && index1 < sequence.length && index2 >= 0 && index2 < sequence.length && index1 !== index2 ) {
            if (sequence[index1] === sequence[index2]) {
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                sequence.splice(index1, 1);
                if (index2 > index1) {
                    sequence.splice(index2 - 1, 1);
                }
                else {
                    sequence.splice(index2, 1);
                }
            }
            else {
                console.log("Try again!");
            }
            validIndex = true;
        }
        else if (!validIndex || index1 !== index2) {
            console.log("Invalid input! Adding additional elements to the board")
            let newNum = "-" + moves + "a";
            sequence.splice((sequence.length / 2), 0, newNum);
            sequence.splice((sequence.length / 2), 0, newNum);
        }
        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }  
    }
}