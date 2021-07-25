/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  var number = (array.length - count);

  if (array.length === 0) {
    newArray = array;
  } else {
    for (var i = number; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
