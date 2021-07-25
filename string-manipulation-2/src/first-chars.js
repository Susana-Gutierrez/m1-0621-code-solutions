/* exported firstChars */

function firstChars(length, string) {
  var newString = '';

  if ((string === '') || (string.length < length)) {
    newString = string;
  } else {

    for (var i = 0; i < length; i++) {
      newString = newString + string[i];
    }
  }

  return newString;

}
