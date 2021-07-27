/* exported reverseWord */

function reverseWord(word) {
  var index = word.length - 1;
  var newWord = '';

  for (var i = index; i >= 0; i--) {
    newWord = newWord + word[i];
  }

  return newWord;

}
