function LunchBreak([arg1, arg2, arg3])  {
    let name_series = arg1;
    let duration_of_epizod = Number(arg2);
    let duration_of_break = Number(arg3);
    
    let time_for_lunch = duration_of_break / 8;
    let time_for_break = duration_of_break / 4;
    let left_time = duration_of_break - time_for_break - time_for_lunch;
    if (left_time >= duration_of_epizod) {
        console.log(`You have enough time to watch ${name_series} and left with ${Math.ceil(left_time - duration_of_epizod)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${name_series}, you need ${Math.ceil(duration_of_epizod - left_time)} more minutes.`)
    } 
}