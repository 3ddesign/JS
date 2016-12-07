// Create object with methods

  var myDoc = {
    makeContainer: function () {
    var cont = document.createElement('div');
    cont.className = 'container';
    container = document.body.appendChild(cont);
  },

    makeHeader: function () {
    var header = document.createElement('h6');
    header.innerHTML = 'Тест по программированию';
    container.appendChild(header);
    }
}

// Create DOM elements when page ready

window.onload = function () {
myDoc.makeContainer();
myDoc.makeHeader();
}
