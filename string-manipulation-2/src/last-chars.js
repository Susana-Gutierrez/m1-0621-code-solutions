/* exported lastChars */

function lastChars(length, string) {
  var newString = '';

  var index = string.length - length;

  if ((string.length < length) || (string === '')) {
    newString = string;
  } else {
    for (var i = index; i < string.length; i++) {
      newString = newString + string[i];
    }
  }

  return newString;

}
