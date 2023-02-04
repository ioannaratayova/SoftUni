function Salary(args) {
    let n = Number(args[0]);
    let salary = Number(args[1]);
 
    for (let i = 2; i <= args.length; i++) {
       if (args[i] == 'Facebook') {
          salary -= 150;
       }
       else if (args[i] == 'Instagram') {
          salary -= 100;
       }
       else if (args[i] == 'Reddit') {
          salary -= 50;
       }
    }
    if (salary <= 0) {
       console.log('You have lost your salary.');
    }
    else {
       console.log(Number(salary));
    }
}