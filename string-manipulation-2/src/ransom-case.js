/* exported ransomCase */

function ransomCase(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if ((i % 2) !== 0) {
      newString = newString + string[i].toUpperCase();
    } else {
      newString = newString + string[i].toLowerCase();
    }
  }

  return newString;

}
