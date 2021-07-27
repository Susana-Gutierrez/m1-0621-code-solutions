/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString = newString + secondChar;
    } else if (i === secondIndex) {
      newString = newString + firstChar;
    } else {
      newString = newString + string[i];
    }
  }

  return newString;

}
