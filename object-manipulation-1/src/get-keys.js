/* exported getKeys */

function getKeys(object) {
  var newArray = [];

  for (const value in object) {
    newArray.push(value);
  }
  return newArray;
}
