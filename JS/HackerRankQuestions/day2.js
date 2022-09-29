// function getLetter(s) {
// 	let letter;
// 	let strLenght = String(s).length;
// 	if (strLenght <= 0 && strLenght <= 100) {
// 		switch (s[i]) {
// 			case "a" || "e" || "i" || "o" || "u":
// 				return (letter = "A");
// 				break;
// 			case "b" || "c" || "d" || "f" || "g":
// 				return (letter = "B");
// 				break;
// 			case "h" || "j" || "k" || "l" || "m":
// 				return (letter = "C");
// 				break;
// 			case "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z":
// 				return (letter = "D");
// 				break;
// 		}
// 	}

// 	return letter;
// }

s = "asdasdasrfaef";

function getLetter(s) {
	let letter;
	let i = 0;
	switch (s[i]) {
		case "a" || "e" || "i" || "o" || "u":
			return (letter = "A");
			break;
		case "b" || "c" || "d" || "f" || "g":
			return (letter = "B");
			break;
		case "h" || "j" || "k" || "l" || "m":
			return (letter = "C");
			break;
		case "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z":
			return (letter = "D");
			break;
	}
	return letter;
}

console.log(getLetter(s));
