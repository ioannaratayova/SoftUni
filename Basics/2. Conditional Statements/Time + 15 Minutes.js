function time15Minutes([arg1, arg2])  {
    let hour = Number(arg1);
    let min = Number(arg2) + 15;
    if (min > 59) {
     hour += 1;
     min -= 60;
    }
    if (hour >= 24) {
     hour = 0;
    }
    if (min < 10) {
    console.log(`${hour}:0${min}`)
    }
    else {
     console.log(`${hour}:${min}`)
    }
 }