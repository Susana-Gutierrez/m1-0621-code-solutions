/* exported chunk */

function chunk(array, size) {

  var arrayOfArrays = [];
  var newArray = [];
  var index = 0;

  var numberOfArrays = array.length / size;

  if ((array.length % size) !== 0) {
    numberOfArrays = Math.floor(array.length / size) + 1;
  }

  for (var i = 0; i < numberOfArrays; i++) {
    for (var x = 0; x < size; x++) {
      if ((x + index) < array.length) {
        newArray.push(array[x + index]);
      } else {
        break;
      }
    }
    arrayOfArrays.push(newArray);
    newArray = [];
    index = index + size;
  }

  return arrayOfArrays;

}
