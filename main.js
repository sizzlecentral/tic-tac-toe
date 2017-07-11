document.addEventListener("DOMContentLoaded", function() {

  var clickCount = 0;
  var winner1 = document.querySelector('.winner1');
  var winner2 = document.querySelector('.winner2');

  var chickenDinner = function() {
    if (square1.classList.contains('player1') && square2.classList.contains('player1') && square3.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square4.classList.contains('player1') && square5.classList.contains('player1') && square6.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square7.classList.contains('player1') && square8.classList.contains('player1') && square9.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square1.classList.contains('player1') && square4.classList.contains('player1') && square7.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square2.classList.contains('player1') && square5.classList.contains('player1') && square8.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square3.classList.contains('player1') && square6.classList.contains('player1') && square9.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square1.classList.contains('player1') && square5.classList.contains('player1') && square9.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square3.classList.contains('player1') && square5.classList.contains('player1') && square7.classList.contains('player1')) {
      winner1.style.display = 'block';
    } else if (square1.classList.contains('player2') && square2.classList.contains('player2') && square3.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square4.classList.contains('player2') && square5.classList.contains('player2') && square6.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square7.classList.contains('player2') && square8.classList.contains('player2') && square9.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square1.classList.contains('player2') && square4.classList.contains('player2') && square7.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square2.classList.contains('player2') && square5.classList.contains('player2') && square8.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square3.classList.contains('player2') && square6.classList.contains('player2') && square9.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square1.classList.contains('player2') && square5.classList.contains('player2') && square9.classList.contains('player2')) {
      winner2.style.display = 'block';
    } else if (square3.classList.contains('player2') && square5.classList.contains('player2') && square7.classList.contains('player2')) {
      winner2.style.display = 'block';
    }
  };

  var newGame = document.querySelector('.refresh');
  newGame.addEventListener('click', function() {
    location.reload();
  });

  var clickEvent = function(event) {
    if (this.innerHTML === '') {
      clickCount++;
      var img = document.createElement('img');
      if (clickCount % 2 === 1) {
        img.src = 'X.png';
        this.classList.add('player1');
      } else {
        img.src = 'O.png';
        this.classList.add('player2');
      }
      this.appendChild(img);
      chickenDinner();
    }
  };

  var square1 = document.querySelector('#square1');
  square1.addEventListener('click', clickEvent);

  var square2 = document.querySelector('#square2');
  square2.addEventListener('click', clickEvent);

  var square3 = document.querySelector('#square3');
  square3.addEventListener('click', clickEvent);

  var square4 = document.querySelector('#square4');
  square4.addEventListener('click', clickEvent);

  var square5 = document.querySelector('#square5');
  square5.addEventListener('click', clickEvent);

  var square6 = document.querySelector('#square6');
  square6.addEventListener('click', clickEvent);

  var square7 = document.querySelector('#square7');
  square7.addEventListener('click', clickEvent);

  var square8 = document.querySelector('#square8');
  square8.addEventListener('click', clickEvent);

  var square9 = document.querySelector('#square9');
  square9.addEventListener('click', clickEvent);

}); // End of document listener
