function fearNotLetter(str){
	//Conver letters to charCodes
 	let alphabetCharCodes = str
 			.split('')
 			.map(letter => letter
 			.charCodeAt(0));
 	let result = alphabetCharCodes.find((letter,position,arr) => ++letter !== arr[++position]);
 	return result === alphabetCharCodes[alphabetCharCodes.length - 1] ?
								undefined :
								String.fromCharCode(++result);
 };
console.log(fearNotLetter("abce"));
