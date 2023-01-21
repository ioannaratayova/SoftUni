function WorkingHours([arg1, arg2])  {
    let hour = Number(arg1);
    let day= arg2;
    if ((hour >= 10 && hour <= 18)&&(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday' || day == 'Saturday')) {
        console.log('open');
    }
    else {
        console.log('closed');
    }
}