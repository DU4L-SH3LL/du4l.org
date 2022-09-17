'use strict';

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const textArray = ['SH3LL', 'R3V3R53', 'W3B', 'CRYP70', 'P4WN', '@DHBW Mannheim'];
const elementId = typewriterText;
const sleepTime = 2000;

(async function typeWriter() {
	for (let i = 0; i < textArray.length; i++) {

		elementId.innerHTML = '';
		let charArray = textArray[i].split('');

		charArray.forEach((letter, j) => 
			setTimeout(() => (elementId.innerHTML += letter), 100 * j)
		);

		await sleep(sleepTime);

		charArray.forEach((letter, j) => {
				setTimeout(() => {
					elementId.innerHTML = elementId.innerHTML.slice(0, -1); 
				}, 100 * j);
			}
		);

		await sleep(sleepTime);
	}

	setTimeout(typeWriter, sleepTime);
})()
