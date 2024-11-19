// Task 1: Reverse String
function reverseString() {
	const input = document.getElementById('reverseInput').value;
	const reversed = input.split('').reverse().join('');
	document.getElementById('reversed').textContent = `Reversed: ${reversed}`;
}

// Task 2: FizzBuzz
function fizzBuzz() {
	const outputDiv = document.getElementById('fizzbuzzOutput');
	outputDiv.innerHTML = ''; // Clear previous output

	for (let i = 1; i <= 100; i++) {
		const text =
			i % 3 === 0 && i % 5 === 0
				? 'FizzBuzz'
				: i % 3 === 0
				? 'Fizz'
				: i % 5 === 0
				? 'Buzz'
				: i;

		const p = document.createElement('p');
		p.textContent = text;
		outputDiv.appendChild(p);
	}
}

// Task 3: Even or Odd
function checkEvenOrOdd() {
	const input = parseInt(document.getElementById('evenOddInput').value, 10);
	const result = input % 2 === 0 ? 'Even' : 'Odd';
	document.getElementById(
		'evenOddOutput',
	).textContent = `The number is ${result}.`;
}

// Task 4: Interactive Feature
function changeText() {
	const heading = document.getElementById('interactiveText');
	heading.textContent = 'The text has been changed!';
	heading.style.fontWeight = 'bolder';
}
