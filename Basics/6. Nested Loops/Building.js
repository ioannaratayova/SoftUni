function solve(args) {
    let floors = Number(args.shift());
    let rooms = Number(args.shift());
    let printLine = "";
    
    for (let i = floors; i > 0; i--) {
        printLine = ''
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                printLine += `L${i}${j} `;
                
            }
            else if  (i % 2 == 0) {
                printLine += `O${i}${j} `;
            }
            else {
                printLine += `A${i}${j} `;
            }
        }
        console.log(printLine);
    }
}