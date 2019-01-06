var letters = ["c", "l", "o", "v", "e", "d"];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var comguesses;
var guessedletters = [];



function chancesleft () {
  document.getElementById("guesses-rem").innerHTML = guessesleft;
};

function letterstoguess () {
  comguesses = letters[Math.floor(Math.random() * letters.length)];
};

function lettersguessed () {
  document.getElementById("your-guesses").innerHTML = guessedletters.join();
}



var reset = function() {
  guessesleft = 9;
  guessedletters = [];
  chancesleft();
  letterstoguess();
  lettersguessed();
};

chancesleft();
letterstoguess();

document.onkeydown = function(event) {
  guessesleft--;
  var letters = String.fromCharCode(event.which).toLowerCase();
  guessedletters.push(letters);
  chancesleft();
  lettersguessed();

  if (letters === comguesses) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    reset();
  }

  if (guessesleft === 0) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    reset();
  }
};






