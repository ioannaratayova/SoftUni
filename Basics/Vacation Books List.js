function VacationBookList([arg1, arg2, arg3])  {
    let numberOfPages = Number(arg1);
    let Pages_per_hour = Number(arg2);
    let numberOfDaysForBook = Number(arg3);
    let all_hours = numberOfPages / Pages_per_hour;
    let hours_for_day = all_hours / numberOfDaysForBook;
    console.log(hours_for_day);
  }