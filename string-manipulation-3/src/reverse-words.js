/* exported reverseWords */

function reverseWords(string) {

  var index = string.length - 1;
  var newString = '';
  var newArrayString = [];

  for (var i = index; i >= 0; i--) {
    newString = newString + string[i];
  }

  newArrayString = newString.split(' ');

  var index2 = newArrayString.length - 1;
  var finalString = '';

  for (var x = index2; x >= 0; x--) {
    if (x === 0) {
      finalString = finalString + newArrayString[x];
    } else {
      finalString = finalString + newArrayString[x] + ' ';
    }
  }

  return finalString;

}
