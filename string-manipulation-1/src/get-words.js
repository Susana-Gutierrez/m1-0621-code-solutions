/* exported getWords */

function getWords(string) {
  var words = [];
  words = string.split(' ');

  if (string === '') {
    words = [];
  }

  return words;
}
