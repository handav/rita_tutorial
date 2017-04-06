var inputText = '';
var filePath = './theWaves.txt';
var data;

function preload() {
  data = loadStrings(filePath);
}

function setup() {
  var cleanedText = cleanText(data);
  var markov = new RiMarkov(2);
  markov.loadText(cleanedText);
  var sentence = markov.generateSentences(3);
  console.log(sentence);
}

function cleanText(text) {
  for (var i = 0; i <= text.length-1; i ++) {
    inputText = inputText + text[i];
  }
  return RiTa.tokenize(inputText)
    .join(' ')
    .trim();
}
