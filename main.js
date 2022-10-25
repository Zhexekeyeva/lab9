//Q1
function outputMessage() {
	console.log('Hello, World!');
	console.log('Hello, World!');
	console.log('Hello, World!');
}
//Q11
function checkIfEvenOrOdd() {
	let x = 1001;
	if (x % 2 === 0) {
		console.log('The given number is even');
	} else {
		console.log('The given number is odd');
	}
}
//Q13
function outputGreaterNumber() {
	let a = 17;
	let b = 23;
	if (a > b) {
		console.log('a is greater than b');
	} else if (a < b) {
		console.log('b is greater than a');
	} else if (a === b) {
		console.log('The given numbers are equal');
	}
}
outputMessage();
checkIfEvenOrOdd();
outputGreaterNumber();