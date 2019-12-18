
//Generate the AlphaBet
function generateAlphabet(charCode=97){
	if (charCode === 122) return 'z';
	return ''.concat(String.fromCharCode(charCode))
					.concat(generateAlphabet(++charCode));
};

function fearNotLetter(str) {
	let alphabet = generateAlphabet().split('');

	// Convert letters in alphabet to UTF-16 Codes
	let alphabetCharCodes = str
				.split('')
				.map((letter,index,arry) => letter
				.charCodeAt(0));
	
	let locateMissingLetter = alphabetCharCodes
					.map((charCode,index,arry) => 
						charCode + 1 === arry[index + 1] ? 
						charCode : 
						String.fromCharCode(charCode + 1));	
	return locateMissingLetter; 
}

console.log(fearNotLetter("abce"));

