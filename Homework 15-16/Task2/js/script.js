    function Human() {
        this.name = 'humans`s name';
        this.age = 'humans`s age';
        this.gender = 'humans`s gender';
        this.hight = 'humans`s hight';
        this.weight = 'humans`s weight';
    }

    function Worker() {
        this.job = 'workers`s job';
        this.salary = 'workers`s salary';
        this.work = function() {
            console.log('Working!');
        };
    }

    Worker.prototype = new Human();

    function Student() {
        this.study = 'student`s study';
        this.scholarship = 'student`s scholarship';
        this.watchTvSeries = function() {
            console.log('Watching TV series!');
        };
    }

    Student.prototype = new Human();

    var newWorker1 = new Worker();
    var newStudent1 = new Student();

    console.log('Worker name:', newWorker1.name + '\n' + 'Age:', newWorker1.age + '\n' + 'Gender:', newWorker1.gender + '\n' + 'Hight:', newWorker1.hight + '\n' + 'Weight:', newWorker1.weight + '\n' + 'Job:', newWorker1.job + '\n' + 'Salary:', newWorker1.salary);
    newWorker1.work();
    console.log('Student name:', newStudent1.name + '\n' + 'Age:', newStudent1.age + '\n' + 'Gender:', newStudent1.gender + '\n' + 'Hight:', newStudent1.hight + '\n' + 'Weight:', newStudent1.weight + '\n' + 'Study:', newStudent1.study + '\n' + 'Scholarship:', newStudent1.scholarship);
    newStudent1.watchTvSeries();
