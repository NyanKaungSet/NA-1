function decodeMorse(morseCode) {
  // Decoding logic from stackoverflow.com
}

function encodeMorse(text) {
  // Encoding logic similar to decodeMorse function
}

function decodeOrEncode() {
  const morseInput = document.getElementById('morseInput');
  const output = document.getElementById('output');

  if (morseInput.value.length > 0) {
    const inputText = morseInput.value;
    const decodedText = morseInput.value.includes('--') ? decodeMorse(inputText) : encodeMorse(inputText);
    output.value = decodedText;
  } else {
    output.value = '';
  }
}
