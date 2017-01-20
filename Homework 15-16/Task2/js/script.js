    function Human(name, age, gender, hight, weight) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hight = hight;
        this.weight = weight;
    }

var Worker.__proto__ = Human;
Worker.my = 2;
console.log(Human);
