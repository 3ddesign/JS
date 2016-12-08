window.onload = function () {

var start = document.getElementById('startButton')
var clear = document.getElementById('clearButton')
var display = document.getElementsByName('h4')

console.log(start);

function startHandler(){
  alert("work!");
}

start.addEventListener('click', startHandler)

}
