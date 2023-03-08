function Sunglasses([n]) {
    n = Number(n);
    let width = 5 * n;
    let height = n; 
    let glasswidth = 2 * n;
    let FrameIndex = Math.floor((n / 2) - 1);

    if (n % 2 == 0) {
        FrameIndex = Math.floor((n / 2) - 1) - 1;
    }

    let frame = " ".repeat(n);
    console.log(`${'*'.repeat(glasswidth) + frame + '*'.repeat(glasswidth)}`);
    
    for (let row = 0; row < height - 2; row++) {
        if (row == FrameIndex) {
            frame = "|".repeat(n);
        }
        else {
            frame = " ".repeat(n);
        }
        console.log(`*${"/".repeat(glasswidth - 2)}*${frame}*${"/".repeat(glasswidth - 2)}*`);
    }
    frame = " ".repeat(n);
    console.log(`${'*'.repeat(glasswidth) + frame + '*'.repeat(glasswidth)}`);
}