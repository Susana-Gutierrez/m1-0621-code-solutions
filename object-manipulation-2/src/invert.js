/* exported invert */

function invert(source) {

  var newObject = {};

  for (const value in source) {
    newObject[source[value]] = value;
  }

  return newObject;

}
