/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = '';

  if (word.toLowerCase() === 'javascript') {
    for (var x = 0; x < word.length; x++) {
      if (x === 0) {
        newWord = word[x].toUpperCase();
      } else if (word[x].toLowerCase() === 's') {
        newWord = newWord + word[x].toUpperCase();
      } else {
        newWord = newWord + word[x].toLowerCase();
      }

    }
  } else {

    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        newWord = word[i].toUpperCase();
      } else {
        newWord = newWord + word[i].toLowerCase();
      }
    }
  }

  return newWord;

}
