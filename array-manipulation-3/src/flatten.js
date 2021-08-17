/* exported flatten */

function flatten(array) {
  var newArray = [];
  var string = '';

  for (var i = 0; i < array.length; i++) {

    if (array[i].length > 0) {
      for (var x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
      }
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;

}
