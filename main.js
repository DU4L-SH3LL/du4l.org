'use strict';

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const textArray = ['SH3LL', 'R3V3R53', 'W3B', 'CRYP70', 'P4WN', '@DHBW Mannheim'];
const elementId = typewriterText;
const charTime = 100; // ms
const sleepTime = 2000; // ms

async function typeWriter() {
	while(true) {
		for (let i = 0; i < textArray.length; i++) {

			elementId.innerHTML = '';
			let charArray = textArray[i].split('');
	
			charArray.forEach((letter, j) => 
				setTimeout(() => (elementId.innerHTML += letter), charTime * j)
			);
			
			// need to wait for all characters to appear, then sleep
			let totalSleepTime = sleepTime + charArray.length * charTime;
			await sleep(totalSleepTime); 
	
			charArray.forEach((letter, j) => {
					setTimeout(() => {
						elementId.innerHTML = elementId.innerHTML.slice(0, -1); 
					}, charTime * j);
				}
			);
	
			await sleep(totalSleepTime);
		}
	}
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
	typeWriter();
} else {
	elementId.innerHTML += textArray[textArray.length-1];
}
