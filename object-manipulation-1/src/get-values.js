/* exported getValues */

function getValues(object) {
  var newArray = [];

  for (const value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
