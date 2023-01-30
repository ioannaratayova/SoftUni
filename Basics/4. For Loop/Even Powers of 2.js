function evenPowersWith2([args]) {
    let n = Number(args);
    for (let i = 0; i <= n; i++) {
       if (i % 2 == 0) {
          console.log(Math.pow(2, i))
       }
    }
}