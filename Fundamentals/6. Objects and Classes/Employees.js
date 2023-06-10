function employees(arr) {
    let person = {};

    for (let i = 0; i < arr.length; i++) {
        let lengthNames = arr[i].length;
        let names = arr[i];
        person.name = names; 
        person.length = lengthNames;
        person.info = function() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.length}`)
        }
        person.info()
    }
}