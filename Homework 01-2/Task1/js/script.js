function pow(a, b) {
    var result = 1;

    for (var i = 0; i < b; i++) {
        result *= a;
    }
    console.log(a + ' в степени ' + b + ' равно ' + result);
}

var num = prompt("Введите целое число:");
if (parseInt(num) != num) {
    alert("Вы ввели не целое число!");
} else {
    var degree = prompt("Введите степень:");
    if (degree < 0) {
        alert("Введите корректное значение стемени")
    } else {
        pow(num, degree)
    }
}
