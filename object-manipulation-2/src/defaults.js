/* exported defaults */

function defaults(target, source) {
  var arraySource = [];
  var arrayTarget = [];
  var found;

  for (const valueSource in source) {
    arraySource.push(valueSource);
  }

  for (const valueTarget in target) {
    arrayTarget.push(valueTarget);
  }

  if ((arrayTarget.length === 0) || (arraySource.length === 0)) {
    for (const valueSource in source) {
      target[valueSource] = source[valueSource];
    }
  }

  for (var i = 0; i < arraySource.length; i++) {
    for (var x = 0; x < arrayTarget.length; x++) {
      if (arrayTarget[x] === arraySource[i]) {
        found = true;
        break;
      } else {
        found = false;
      }
    }
    if (found === false) {
      target[arraySource[i]] = source[arraySource[i]];
    }
  }

}
