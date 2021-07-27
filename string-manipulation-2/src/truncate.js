/* exported truncate */

function truncate(length, string) {
  var newString = '';

  if ((string === '') || (string.length < length)) {
    newString = string;
  } else {
    for (var i = 0; i < length; i++) {
      newString = newString + string[i];
    }
  }

  newString = newString + '...';

  return newString;

}
