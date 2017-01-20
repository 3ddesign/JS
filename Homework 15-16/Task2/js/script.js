    function Human() {
        this.name = 'name';
        this.age = 'age';
        this.gender = 'gender';
        this.hight = 'hight';
        this.weight = 'weight';
    }

    function Worker() {
        this.job = 'job';
        this.salary = 'salary';
        this.work = function() {
            console.log('Working!');
        };
    }

    Worker.prototype = new Human();

    function Student() {
        this.study = 'study';
        this.scholarship = 'scholarship';
        this.watchTvSeries = function() {
            console.log('Watching TV series!');
        };
    }

    Student.prototype = new Human();

    var newWorker1 = new Worker();
    var newStudent1 = new Student();

    console.log('Worker`s name:', newWorker1.name + ', ' + 'Age:', newWorker1.age + ', ' + 'Gender:', newWorker1.gender + ', ' + 'Hight:', newWorker1.hight + ', ' + 'Weight:', newWorker1.weight + ', ' + 'Job:', newWorker1.job + ', ' + 'Salary:', newWorker1.salary);
    newWorker1.work();
    console.log('Student`s name:', newStudent1.name + ', ' + 'Age:', newStudent1.age + ', ' + 'Gender:', newStudent1.gender + ', ' + 'Hight:', newStudent1.hight + ', ' + 'Weight:', newStudent1.weight + ', ' + 'Study:', newStudent1.study + ', ' + 'Scholarship:', newStudent1.scholarship);
    newStudent1.watchTvSeries();
