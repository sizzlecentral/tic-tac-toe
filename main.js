document.addEventListener("DOMContentLoaded", function() {

  var clickCount = 0;

  var square1 = document.querySelector('#square1');
  square1.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square1.append(img);
  });

  var square2 = document.querySelector('#square2');
  square2.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square2.append(img);
  });

  var square3 = document.querySelector('#square3');
  square3.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square3.append(img);
  });

  var square4 = document.querySelector('#square4');
  square4.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square4.append(img);
  });

  var square5 = document.querySelector('#square5');
  square5.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square5.append(img);
  });

  var square6 = document.querySelector('#square6');
  square6.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square6.append(img);
  });

  var square7 = document.querySelector('#square7');
  square7.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square7.append(img);
  });

  var square8 = document.querySelector('#square8');
  square8.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square8.append(img);
  });

  var square9 = document.querySelector('#square9');
  square9.addEventListener('click', function(event) {
    clickCount++;
    var img = document.createElement('img');
    if (clickCount % 2 === 1) {
      img.src = 'X.png';
    } else {
      img.src = 'O.png';
    }
    square9.append(img);
  });

}); // End of document listener

// x = 88
// o = 79
