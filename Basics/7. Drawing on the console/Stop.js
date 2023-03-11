function Stop([n]) {
    let tochki = Number(n);
    let tireta = Number(2 * n - 1);

    console.log(`${".".repeat(tochki + 1)}${"_".repeat(tireta + 2)}${".".repeat(tochki + 1)}`);
  
    for (let i = 0; i < n; i++) {
        console.log(`${".".repeat(tochki)}//${"_".repeat(tireta)}\\\\${".".repeat(tochki)}`);
        tochki -= 1;
        tireta += 2;
    }
    console.log(`//${"_".repeat((tireta - 5) / 2)}STOP!${"_".repeat((tireta - 5) / 2)}\\\\`);
    
    for (let i = 0; i < n; i++) {
        console.log(`${".".repeat(tochki)}\\\\${"_".repeat(tireta)}//${".".repeat(tochki)}`);
        tochki += 1;
        tireta -= 2;
    }
}