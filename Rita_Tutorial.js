var data;

function preload() {
  var filePath = './theWaves.txt';
  data = loadStrings(filePath);
}

function setup() {
  var cleanedText = cleanText(data);
  var markov = new RiMarkov(2);
  markov.loadText(cleanedText);
  var sentences = markov.generateSentences(3);
  for (var i = 0; i<sentences.length; i++) {
    console.log(sentences[i]);
  }
}

function cleanText(text) {
  var inputText = '';
  for (var i = 0; i <= text.length-1; i ++) {
    inputText = inputText + text[i];
  }
  return RiTa.tokenize(inputText)
    .join(' ')
    .trim();
}
