const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let strResult='';
	let arrStr2;
    let arrStr10=expr.match(/.{1,10}/g);
	arrStr10.forEach((el)=>{
		if(el=='**********') {
			strResult+=' ';
		}
		else{
			arrStr2=el.match(/.{1,2}/g);
			let word='';
			arrStr2.forEach((elem)=>{
			  if(elem=='10'){
				word+='.';
			  }
			  else if(elem=='11'){
				word+='-';
			  }
		  })
		  strResult+= MORSE_TABLE[word];
		}
	})
	return strResult;
}

module.exports = {
    decode
}