window.onload = function() {

    var startB = document.getElementById('startButton');
    var clearB = document.getElementById('clearButton');
    var displaySec1 = document.getElementById('displaySec1');
    var displaySec2 = document.getElementById('displaySec2');
    var displayMin1 = document.getElementById('displayMin1');
    var displayMin2 = document.getElementById('displayMin2');
    var displayHou1 = document.getElementById('displayHou1');
    var displayHou2 = document.getElementById('displayHou2');
    var displaySecFull = document.getElementById('displaySeconds');
    var counter = 0;
    var counterSec1 = 0;
    var counterSec2 = 0;
    var counterMin1 = 0;
    var counterMin2 = 0;
    var counterHou1 = 0;
    var counterHou2 = 0;
    var clearPress = true;


    function someFunction() {
        displaySecFull.innerHTML = counter;
        counter++;
        if (counter > 100) {
            counter = 0;
            counterSec1++;
            displaySec1.innerHTML = counterSec1;
            if (counterSec1 > 9) {
                displaySec1.innerHTML = 0;
                counterSec1 = 0;
                counterSec2++;
                displaySec2.innerHTML = counterSec2;
                if (counterSec2 > 5) {
                    displaySec2.innerHTML = 0;
                    counterSec2 = 0;
                    counterMin1++;
                    displayMin1.innerHTML = counterMin1;
                    if (counterMin1 > 9) {
                        displayMin1.innerHTML = 0;
                        counterMin1 = 0;
                        counterMin2++;
                        displayMin2.innerHTML = counterMin2;
                        if (counterMin2 > 5) {
                            displayMin2.innerHTML = 0;
                            counterMin2 = 0;
                            counterHou1++;
                            displayHou1.innerHTML = counterHou1;
                            if (counterHou1 > 9) {
                                displayHou1.innerHTML = 0;
                                counterHou1 = 0;
                                counterHou1++;
                                displayHou2.innerHTML = counterHou2;
                                if (counterHou2 > 23) {
                                    clearInterval(timer);
                                    startHandler();
                                }
                            }
                        }

                    }
                }
            }

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
            displaySec1.innerHTML = counter;
            clearB.className = 'btn btn-warning';
            clearB.innerHTML = 'Pause';
            clearPress = true;
        }
    }




}
