function softUniBar(arr) {
    let regex = /%(?<customer>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>\d+)\|[^\|\$%\.0-9]*(?<price>\d+\.?\d+)\$/g;
    let totalIncome = 0;
    for (let line of arr) {
        if (line == 'end of shift') {
            break;
        }
        let matches = [...line.matchAll(regex)];
        if (line.match(regex)) {
            let customer = matches[0].groups.customer;
            let product = matches[0].groups.product;
            let count = matches[0].groups.count;
            let price = matches[0].groups.price;
            
            let totalPrice = Number(count) * Number(price);
            
            totalIncome += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}