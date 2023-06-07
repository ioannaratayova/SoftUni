function covertorObj(ime1, ime2, hair) {
    let person = {
        name: ime1,
        lastName: ime2,
        hairColor: hair
    }
    let jsonFile = JSON.stringify(person)
    console.log(jsonFile);
}