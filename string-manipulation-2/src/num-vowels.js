/* exported numVowels */

function numVowels(string) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var numOfVowels = 0;

  for (var i = 0; i < string.length; i++) {
    for (var x = 0; x < vowels.length; x++) {
      if (string[i] === vowels[x]) {
        numOfVowels = numOfVowels + 1;
      }
    }
  }

  return numOfVowels;

}
