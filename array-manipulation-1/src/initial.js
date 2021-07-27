/* exported initial */

function initial(array) {
  var newArray = [];
  var lastIndex = array.length - 1;

  for (var i = 0; i < lastIndex; i++) {
    newArray[i] = array[i];
  }

  return newArray;

}
