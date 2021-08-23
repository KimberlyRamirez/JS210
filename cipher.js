const ALPHA = Array.from(Array(26)).map((e, i) => i + 65);
const UPPER_ALPHA = ALPHA.map((x) => String.fromCharCode(x));
const LOWER_ALPHA = UPPER_ALPHA.map(ele => ele.toLowerCase());

function rot13(text) {
  let resultStr = ''
  let splitText = text.split('');

  splitText.forEach(ele => {
    if (/[a-zA-Z]/.test(ele)) {
      resultStr += rotChar(ele);
    } else {
      resultStr += ele;
    }
  })
   
  return resultStr;
}

function rotChar(letter) {
  let index = 0

  if (UPPER_ALPHA.includes(letter)) {
    index = UPPER_ALPHA.indexOf(letter);
  } else {
    index = LOWER_ALPHA.indexOf(letter);
  }
  
  let finalIndex = index + 13;

  if (finalIndex >= 26) finalIndex -= 26 

  UPPER_ALPHA.includes(letter) ? (letter = UPPER_ALPHA[finalIndex]) : (letter = LOWER_ALPHA[finalIndex]);

  return letter;
}

console.log(rot13('abcd'));