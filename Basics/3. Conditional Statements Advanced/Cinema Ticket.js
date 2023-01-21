function CinemaTicket([arg1])  {
    let day = arg1;
    switch (day) {
     case ('Monday'):
     case ('Tuesday'):
        console.log(12);
        break;
     case ('Wednesday'):
     case ('Thursday'):
        console.log(14);
        break;
     case ('Friday'):
        console.log(12);
        break;
     default:
        console.log(16);
        break;
    }
}