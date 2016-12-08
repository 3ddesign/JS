//Создаем и заполняем массив

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(prompt('Введите имя ' + i + ':'));
}

var name = prompt('Введите имя пользователя:');
var flag;

//Осуществляем поиск по массиву
for (var i = 0; i < 5; i++) {
    if (name == arr[i]) {
        var flag = true;
    } else {}
}

//Проверяем значение флага и выводим сообще
if (flag) {
    alert(name + ", вы успешно вошли.");
} else {
    alert("Ошибка! Такого имени нет в массиве");
}
