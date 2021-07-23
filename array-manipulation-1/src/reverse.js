/* exported reverse */

function reverse(array) {
  var newArray = [];
  var numberOfElements = array.length;
  var index = numberOfElements - 1;

  for (var i = 0; i < numberOfElements; i++) {
    newArray[i] = array[index - i];
  }

  return newArray;

}
