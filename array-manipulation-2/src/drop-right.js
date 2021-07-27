/* exported dropRight */

function dropRight(array, count) {

  var newArray = [];
  var number = array.length - count;

  if (array.length === 0) {
    newArray = array;
  } else {
    for (var i = 0; i < number; i++) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
