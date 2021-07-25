/* exported capitalizeWords */

function capitalizeWords(string) {
  var newString = '';
  var arrayString = string.split(' ');
  var newArrayString = '';

  for (var i = 0; i < arrayString.length; i++) {
    for (var x = 0; x < arrayString[i].length; x++) {
      if (x === 0) {
        newArrayString = arrayString[i][x].toUpperCase();
      } else {
        newArrayString = newArrayString + arrayString[i][x].toLowerCase();
      }
    } if (i === 0) {
      newString = newArrayString;
    } else {
      newString = newString + ' ' + newArrayString;
    }
  }

  return newString;
}
