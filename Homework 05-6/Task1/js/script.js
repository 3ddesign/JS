window.onload = function() {

    var startB = document.getElementById('startButton');
    var clearB = document.getElementById('clearButton');
    var display = document.getElementById('displayTime');
    var displaySec = document.getElementById('displaySeconds');
    var counter = 0;
    var counterMain = 0;
    var clearPress = true;


    function someFunction() {
        displaySec.innerHTML = counter;
        counter++;
        if (counter > 100) {
            counter = 0;
            counterMain++;
            displayTime.innerHTML = counterMain;
         }

    }

    function startHandler() {
        timer = setInterval(someFunction, 10);
    }

    startB.addEventListener('click', startHandler);
    clearB.addEventListener('click', clearHandler);




    function clearHandler() {
        if (clearPress == true) {
            clearTimeout(timer);
            clearB.className = 'btn btn-danger';
            clearB.innerHTML = 'Clear';
            clearPress = false;
        } else {
            clearInterval(timer);
            counter = 0;
            display.innerHTML = counter;
            clearB.className = 'btn btn-warning';
            clearB.innerHTML = 'Pause';
            clearPress = true;
        }
    }




}
