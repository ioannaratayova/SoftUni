function fancyBarcodes(arr) {
    let numOfBarcodes = arr.shift();
    let regex = /([@][#]+)([A-Z][a-zA-Z0-9]{4,}[A-Z])([@][#]+)/g;
    let digits = /\d/g;
    let validBarcodes = [];
    
    for (let i = 0; i < numOfBarcodes; i++) {
        if (arr[i].match(regex)) {
            validBarcodes.push(arr[i])
            if (arr[i].match(digits)) {
                let matches = arr[i].match(digits);
                console.log(`Product group: ${matches.join("")}`);
            }
            else {
                console.log('Product group: 00');
            }   
        }
        else {
            console.log('Invalid barcode')
        }
    }
}