var alphabet = "abcdefghijklmnopqrstuvwxyz"; /* String alphabet */
var fullAlphabet = alphabet + alphabet + alphabet; /*  */

/* Verschlüsselungsfunktion */

function encryptText() {
  /* Holt den Text aus den Inputs */
  var text = $('#cypher').val();
  var offset = $('#offset').val();

  /* Verschiebungslänge ist auf die Länge des Alphabets angepasst  */

  offset = (offset % alphabet.length);

  /* Verschlüsselungstext */
  var cipherFinish = '';


  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    var upper = (letter == letter.toUpperCase());
    letter = letter.toLowerCase();

    // Finde den Index des aktuellen Buchstabens im Alphabet
    var index = alphabet.indexOf(letter);
    // Überprüfe, ob der Buchstabe nicht im Alphabet ist
    if (index == -1) {
      cipherFinish += letter;
    } else {
      // Berechnung des Buchstabens
      index = ((index + offset) + alphabet.length);
      var nextLetter = fullAlphabet[index];
      if (upper) nextLetter = nextLetter.toUpperCase();
      cipherFinish += nextLetter;
    }
  }

  $('#finish').val(cipherFinish);
}

/* Entschlüsselungsfunktion */

function decryptText() {
  var text = $('#cypher').val();
  var offset = $('#offset').val();
  offset = (offset % alphabet.length);
  var cipherFinish = '';

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    var upper = (letter == letter.toUpperCase());
    letter = letter.toLowerCase();

   
    var index = alphabet.indexOf(letter);
   
    if (index == -1) {
      cipherFinish += letter;
    } else {
      
      index = ((index - offset) + alphabet.length);
      var nextLetter = fullAlphabet[index];
      if (upper) nextLetter = nextLetter.toUpperCase();
      cipherFinish += nextLetter;
    }
  }

  $('#finish').val(cipherFinish);

}

// Ausführung wenn fertig

$(document).ready(function() {

  // Wenn der Verschlüsselungsbutton gedrückt wird, wird die Funktion encryptText ausgeführt
  $('#encryptBtn').click(function() {
    encryptText();
  });

  // Wenn der Entschlüsselungsbutton gedrückt wird, wird die Funktion decryptText ausgeführt

  $('#decryptBtn').click(function() {
    decryptText();
  });


  // Live Update für Schrift

  // $('#cypher').keypress(function() {
  //   setTimeout(function() {
  //     encryptText();
  //   }, 20);
  // });

  // $('#cypher').blur(function() {
  //   encryptText();
  // });

  $('#offset').change(function() {
    setTimeout(encryptText, 20);
  });
});