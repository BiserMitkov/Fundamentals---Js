function cats(arr) {
    
    let cats = [];

    class Cat {
        constructor(name, age) {
            (this.name = name),
                (this.age = age),
                (this.meow = () =>
                    console.log(`${this.name}, age ${this.age} says Meow`));
        }
    }

    

    for (let currentCat of arr) {
        let currentInfo = currentCat.split(" ");
        let cat = new Cat(currentInfo[0], currentInfo[1]);
        cats.push(cat);
    }

    cats.forEach((el) => el.meow());
}