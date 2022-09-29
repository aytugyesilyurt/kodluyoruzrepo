let myName = prompt("Adınızı girin");

let myNameEl = document.querySelector("#myName");
if (myNameEl) {
	myNameEl.innerHTML = myName;
} else {
	console.warn("Unexpected error. 0x0091 = Missing element");
}

let realDate = new Date();

function getTime() {
	const now = new Date();
	const localDay = realDate.getDay();

	let dayName;
	switch (localDay) {
		case 1:
			dayName = "Pazartesi";
			break;
		case 2:
			dayName = "Salı";
			break;
		case 3:
			dayName = "Çarşamba";
			break;
		case 4:
			dayName = "Perşembe";
			break;
		case 5:
			dayName = "Cuma";
			break;
		case 6:
			dayName = "Cumartesi";
			break;
		case 0:
			dayName = "Pazar";
			break;
		default:
			dayName = "Bir şeyler ters gitti";
			break;
	}

	return `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} ${dayName}`;
}

function updateClock() {
	let myClock = document.querySelector("#myClock");
	myClock.innerHTML = getTime();
}

// console.log(myNameEl.innerHTML);
console.log(realDate.getDay());
// console.log(dayName);
// console.log(myClock.innerHTML);

updateClock();
setInterval(updateClock, 1e3);
