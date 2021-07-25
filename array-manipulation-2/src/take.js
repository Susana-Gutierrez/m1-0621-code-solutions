/* exported take */

function take(array, count) {
  var newArray = [];

  if (array.length === 0) {
    newArray = array;
  } else {
    for (var i = 0; i < count; i++) {
      newArray[i] = array[i];
    }
  }

  return newArray;

}
