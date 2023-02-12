function oldBooks(args) {
    let wantedBook = args[0];
    let index = 1;
    let allB = 0;

    while (true) {
        allB = args[index];
        if (allB == 'No More Books') {
            console.log('The book you search is not here!');
            console.log(`You checked ${index - 1} books.`);
            break;
        }
        if (wantedBook == allB) {
            console.log(`You checked ${index - 1} books and found it.`)
            break;
        }
        index++
    }
}