/* exported capitalize */

function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord = newWord + word[i].toUpperCase();
    } else {
      newWord = newWord + word[i].toLowerCase();
    }
  }

  return newWord;

}
