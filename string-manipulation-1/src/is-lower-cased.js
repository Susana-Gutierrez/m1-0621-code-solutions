/* exported isLowerCased */

function isLowerCased(word) {
  var lowerCased;

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowerCased = true;
    } else {
      return false;
    }
  }

  return lowerCased;
}
