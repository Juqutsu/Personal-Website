var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

function encryptText() {
  var cipherText = $('#cypher').val();
  var cipherOffset = $('#offset').val();
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for (var i = 0; i < cipherText.length; i++) {
    var letter = cipherText[i];
    var upper = (letter == letter.toUpperCase());
    letter = letter.toLowerCase();

    var index = alphabet.indexOf(letter);
    if (index == -1) {
      cipherFinish += letter;
    } else {
      index = ((index + cipherOffset) + alphabet.length);
      var nextLetter = fullAlphabet[index];
      if (upper) nextLetter = nextLetter.toUpperCase();
      cipherFinish += nextLetter;
    }
  }

  $('#finish').val(cipherFinish);
}

function decryptText() {
  var cipherText = $('#cypher').val();
  var cipherOffset = $('#offset').val();
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for (var i = 0; i < cipherText.length; i++) {
    var letter = cipherText[i];
    var upper = (letter == letter.toUpperCase());
    letter = letter.toLowerCase();

    var index = alphabet.indexOf(letter);
    if (index == -1) {
      cipherFinish += letter;
    } else {
      index = ((index - cipherOffset) + alphabet.length);
      var nextLetter = fullAlphabet[index];
      if (upper) nextLetter = nextLetter.toUpperCase();
      cipherFinish += nextLetter;
    }
  }

  $('#finish').val(cipherFinish);
}

$(document).ready(function() {
  $('#encryptBtn').click(function() {
    encryptText();
  });

  $('#decryptBtn').click(function() {
    decryptText();
  });

  $('#cypher').keypress(function() {
    setTimeout(function() {
      encryptText();
    }, 20);
  });

  $('#cypher').blur(function() {
    encryptText();
  });

  $('#offset').change(function() {
    setTimeout(encryptText, 20);
  });

  encryptText();
});