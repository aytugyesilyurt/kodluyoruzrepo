let s = prompt("isim giriniz");
console.log(s);

function vowelsAndConsonants(s) {
	let i = 0;
	let vovelCounter = 0;

	for (i = 0; i < String(s).length; i++)
		if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
			console.log(s[i]);
		}

	for (i = 0; i < String(s).length; i++)
		if (s[i] !== "a" && s[i] !== "e" && s[i] !== "i" && s[i] !== "o" && s[i] !== "u") {
			console.log(s[i]);
		}
}

vowelsAndConsonants(s);
