    function Human() {
        this.name = 'Name';
        this.age = 'Age';
        this.gender = 'Gender';
        this.hight = 'Hight';
        this.weight = 'Weight';
    }

    function Worker() {
        this.job = 'Job';
        this.salary = 'Salary';
        this.work = function() {
            console.log('Working!');
        };
    }

    Worker.prototype = new Human();

    function Student() {
        this.study = 'Study';
        this.scholarship = 'Scholarship';
        this.watchTvSeries = function() {
            console.log('Watching TV series!');
        };
    }

    Student.prototype = new Human();

    var newWorker1 = new Worker();
    var newStudent1 = new Student();

    console.log('Worker`s name:', newWorker1.name + ', ' + 'age:', newWorker1.age + ', ' + 'gender:', newWorker1.gender + ', ' + 'hight:', newWorker1.hight + ', ' + 'weight:', newWorker1.weight + ', ' + 'job:', newWorker1.job + ', ' + 'salary:', newWorker1.salary);
    console.log('Student`s name:', newStudent1.name + ', ' + 'age:', newStudent1.age + ', ' + 'gender:', newStudent1.gender + ', ' + 'hight:', newStudent1.hight + ', ' + 'weight:', newStudent1.weight + ', ' + 'study:', newStudent1.study + ', ' + 'scholarship:', newStudent1.scholarship);
