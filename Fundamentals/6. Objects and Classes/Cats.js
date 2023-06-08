function cat(arr) {
    class Cat {
        constructor (catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" ");
        let catName = currentEl[0];
        let catAge = currentEl[1];

        let cat1 = new Cat(catName, catAge);
        cat1.meow();
    }
}