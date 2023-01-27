function OnTimeForTheExam([n1, n2, n3, n4]) {
    let h_exam = Number(n1);
    let min_exam = Number(n2);
    let arrive_h = Number(n3);
    let arrive_min = Number(n4);
    let new_exam_time = (h_exam * 60) + min_exam;
    let new_arrive_time = (arrive_h * 60) + arrive_min;

    if (new_exam_time < new_arrive_time) {
        let I = new_arrive_time - new_exam_time;
        console.log('Late');
        if (I < 60) {
            console.log(`${I} minutes after the start`);
        }
        else if (I >= 60) {
            let hh = parseInt(I / 60);
            let mm = I % 60;
            if (mm <= 9) {
                console.log(`${hh}:0${mm} hours after the start`);
            }
            else {
                console.log(`${hh}:${mm} hours after the start`);
            }
        }
    }
    else if (new_arrive_time <= new_exam_time && new_exam_time - new_arrive_time <= 30) {
        console.log('On time');
        let I2 = new_exam_time - new_arrive_time;
        if (I2 < 60) {
            console.log(`${I2} minutes before the start`);
        }
    }
    else {
        console.log('Early');
        let I3 = new_exam_time - new_arrive_time;
        if (I3 < 60) {
            console.log(`${I3} minutes before the start`)
        }
        else if (I3 >= 60) {
            let hh2 = parseInt(I3 / 60);
            let mm2 = I3 % 60;
            
            if (mm2 <= 9) {
                console.log(`${hh2}:0${mm2} hours before the start`);
            }
            else {
                console.log(`${hh2}:${mm2} hours before the start`);
            }
        }
    }
}