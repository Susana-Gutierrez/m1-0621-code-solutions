/* exported drop */

function drop(array, count) {
  var newArray = [];

  if (array.length === 0) {
    newArray = array;
  } else {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
