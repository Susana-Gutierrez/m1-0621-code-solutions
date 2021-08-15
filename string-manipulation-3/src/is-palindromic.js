/* exported isPalindromic */

function isPalindromic(string) {
  var string2 = '';
  var newString = '';
  var index = string.length - 1;
  var palindromic;

  for (var i = index; i >= 0; i--) {
    newString = newString + string[i];
  }

  newString = newString.split(' ').join('');
  string2 = string.split(' ').join('');

  for (var x = 0; x < string2.length; x++) {
    if (string2[x] === newString[x]) {
      palindromic = true;

    } else {
      palindromic = false;
      break;
    }
  }

  return palindromic;

}
