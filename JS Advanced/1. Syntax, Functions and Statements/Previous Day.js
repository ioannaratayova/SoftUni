function solve(year, month, day) {
    let currentDate = new Date(year, month - 1, day);
    let previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    
    let previousYear = previousDate.getFullYear();
    let previousMonth = previousDate.getMonth() + 1;
    let previousDay = previousDate.getDate();
    return (`${previousYear}-${previousMonth}-${previousDay}`)
}