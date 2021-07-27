/* exported isUpperCased */

function isUpperCased(word) {
  var upperCased;

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      upperCased = true;
    } else {
      return false;
    }
  }

  return upperCased;
}
