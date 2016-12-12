window.onload = function() {

    //find all elements and init variables:
    var startB = document.getElementById('startButton');
    var splitB = document.getElementById('splitButton');
    var resetB = document.getElementById('resetButton');
    var splitDisp = document.getElementById('splitDisp');
    var displaySec1 = document.getElementById('displaySec1');
    var displaySec2 = document.getElementById('displaySec2');
    var displayMin1 = document.getElementById('displayMin1');
    var displayMin2 = document.getElementById('displayMin2');
    var displayHou1 = document.getElementById('displayHou1');
    var displayHou2 = document.getElementById('displayHou2');
    var displaySecFull = document.getElementById('displaySeconds');
    var displaySecFull1 = document.getElementById('displaySeconds1');
    var displaySecFull2 = document.getElementById('displaySeconds2');
    var counter = 0;
    var counterMil1 = 0;
    var counterMil2 = 0;
    var counterSec1 = 0;
    var counterSec2 = 0;
    var counterMin1 = 0;
    var counterMin2 = 0;
    var counterHou1 = 0;
    var counterHou2 = 0;
    var clearPress = true;
    var splitcouner = 0;
    var splitdisp = ' Split: ';

    //Listeners:
    startB.addEventListener('click', startHandler);
    resetB.addEventListener('click', clearHandler);
    splitB.addEventListener('click', splitHandler);

    //Big display function (to 24Hours maybe )):
    function someFunction() {
        displaySecFull.innerHTML = counter;
        counter++;
        if (counter > 9) {
            counter = 0;
            counterMil1++;
            displaySecFull1.innerHTML = counterMil1;
            if (counterMil1 > 9) {
              displaySecFull1.innerHTML = 0;
                counterMil1 = 0;
                counterMil2++;
                displaySecFull2.innerHTML = counterMil2;
                if (counterMil2 > 9) {
                  displaySecFull2.innerHTML = 0;
                    counterMil2 = 0;
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
        }
    }

    //Clear(Reset) function:
    function clearHandler() {
        clearInterval(timer);
        splitcouner = 0;
        counter = 0;
        counterMil1 = 0;
        counterMil2 = 0;
        counterSec1 = 0;
        counterSec2 = 0;
        counterMin1 = 0;
        counterMin2 = 0;
        counterHou1 = 0;
        counterHou2 = 0;
        displaySecFull1.innerHTML = counterMil1;
        displaySecFull2.innerHTML = counterMil2;
        displaySec1.innerHTML = counterSec1;
        displaySec2.innerHTML = counterSec2;
        displayMin1.innerHTML = counterMin1;
        displayMin2.innerHTML = counterMin2;
        displayHou1.innerHTML = counterHou1;
        displayHou2.innerHTML = counterHou2;
        displaySecFull.innerHTML = counter;
        splitDisp.innerHTML = '';
        clearPress = true;
        startB.className = 'btn btn-success';
        startB.innerHTML = 'Start';
    }

    // Other Handlers:
    function startHandler() {
        if (clearPress === true) {
            timer = setInterval(someFunction, 1);
            startB.className = 'btn btn-warning';
            startB.innerHTML = 'Stop';
            clearPress = false;
        } else {
            clearTimeout(timer);
            clearPress = true;
            startB.className = 'btn btn-success';
            startB.innerHTML = 'Start';
            splitdisp = ' Stop: ';
            splitHandler();
            splitdisp = ' Split: ';
        }
    }

    function splitHandler() {
        splitcouner++;
        var newP = document.createElement('p');
        newP.innerHTML = '<p>' + splitcouner + splitdisp + counterHou2 + counterHou1 + ':' + counterMin2 + counterMin1 + ':' + counterSec2 + counterSec1 + '.' + counterMil2 + counterMil1 + counter + '</p>';
        splitDisp.appendChild(newP);
    }
};
