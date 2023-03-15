function foreignLanguages(arg1) {
    let nameOfCountry = arg1;
    switch (nameOfCountry) {
        case 'USA':
        case 'England':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}