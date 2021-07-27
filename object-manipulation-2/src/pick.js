/* exported pick */

function pick(source, keys) {
  var newObjec = {};

  for (var i = 0; i < keys.length; i++) {
    for (const value in source) {
      if ((value === keys[i]) && (source[value] !== undefined)) {
        newObjec[value] = source[value];
      }
    }
  }

  return newObjec;

}
