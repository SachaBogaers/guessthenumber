let player = prompt("Welkom! Wat is je naam?");
console.log(player);
alert(`Hey ${player}`);

let getRandomInt = function (min, max) {
	console.log("Getting integer");
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

let checkNumber = function (randomNumber, guessedNumber) {
	if (guessedNumber == randomNumber) {
		won = true;
		alert("Gefeliciteerd, je hebt gewonnen!");
		alert(`Dag ${player}, tot de volgende keer.`);
		return;
	} else {
		console.log("INCORRECT");
		alert("Dat is niet correct, probeer het nog eens.");
		return;
	}
}


alert("Picking a random number...");
let lowerBound = prompt("Wat is het kleinste nummer dat je wilt raden?");
let higherBound = prompt("Wat is het grootste nummer dat je wilt raden?")
let randomNumber = getRandomInt(lowerBound, higherBound);
alert(`Random number has been chosen ${randomNumber}`);

let won = false;
let guessedNumber = prompt(`Voer een nummer van ${lowerBound} tot ${higherBound} in om te beginnen met raden...`);
checkNumber(randomNumber, guessedNumber);

for (i = 4; i > 0; i--) {
	if (won == false) {
		alert("Je hebt nog " + i + " pogingen over.")
		guessedNumber = prompt(`Voer een nummer van ${lowerBound} tot ${higherBound} in om opnieuw te raden...`);
		checkNumber(randomNumber, guessedNumber);
	}
};

if (won === false && i === 0) {
	alert("Helaas, je hebt verloren!")
}