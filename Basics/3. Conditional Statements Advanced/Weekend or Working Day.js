function WeekendOrWorkingDay([arg1])  {
    let day = arg1;
    if (day == 'Monday' || day == 'Thursday' || day == 'Wednesday' || day == 'Tuesday' || day == 'Friday') {
     console.log('Working day');
    }
    else if (day == 'Saturday' || day == 'Sunday') {
     console.log('Weekend');
    }
    else {
     console.log('Error');
    }
 }