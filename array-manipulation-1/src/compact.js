/* exported compact */

function compact(array) {

  var newArray = [];
  var numberOfElements = array.length;

  for (var i = 0; i < numberOfElements; i++) {
    if (typeof array[i] === 'boolean') {
      if (array[i] === true) {
        newArray.push(array[i]);
      }
    }

    if (typeof array[i] === 'object') {
      if (array[i] !== null) {
        newArray.push(array[i]);
      }
    }

    if (typeof array[i] === 'number') {
      if ((!isNaN(array[i])) && (array[i] !== 0)) {
        newArray.push(array[i]);
      }
    }

    if (typeof array[i] === 'object') {
      if (array[i] === true) {
        newArray.push(array[i]);
      }
    }

    if (typeof array[i] === 'string') {
      if (array[i] !== '') {
        newArray.push(array[i]);
      }
    }

  }

  return newArray;

}
