function theLift(arr) {
    let numOfPeople = Number(arr[0]);
    let lift = arr[1];
    let conLift = lift.split(" ").map(Number);
    let sum = 0;
    
    for (let i = 0; i < numOfPeople; i++) {

        for (let j = 0; j < conLift.length; j++) {
            if (conLift[j] < 4) {
                conLift[j]++;
                sum++;
                break;
            }
        }
    }
    
    for (let people of conLift) {
        if (people < 4) {
            console.log("The lift has empty spots!");
            break;
        }
    }
   
    if (sum < numOfPeople) {
        console.log(`There isn't enough space! ${numOfPeople - sum} people in a queue! 
${conLift.join(" ")}`);
    }

    if (sum == numOfPeople) {
        console.log(conLift.join(" "));
    }
}