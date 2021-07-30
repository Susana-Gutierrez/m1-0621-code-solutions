/* exported omit */

function omit(source, keys) {

  var newObject = {};
  var newArray = [];

  for (const value in source) {
    newArray.push(value);
  }

  for (var i = 0; i < keys.length; i++) {
    for (var x = 0; x < keys.length; x++) {
      if (keys[i] === newArray[x]) {
        newArray.splice(x, 1);
      }
    }
  }

  for (const value in source) {
    for (var y = 0; y < newArray.length; y++) {
      if (value === newArray[y]) {
        newObject[value] = source[value];
      }

    }
  }

  return newObject;

}
