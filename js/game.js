//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if the guess is right
if (guess === secretNumber) {
	alert("You got it right!");
}

//check wheather the number is high
else if (guess >secretNumber) {
	alert("too high. Guess again");
}

else {
	alert("Too low. Guess again.");
}