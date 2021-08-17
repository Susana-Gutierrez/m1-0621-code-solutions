/* exported equal */

function equal(first, second) {

  var isEqual = false;


  if (first.length === second.length) {
    var arraylength = first.length;

    if (arraylength === 0) {
      return true;
    } else {
      for (var i = 0; i < arraylength; i++) {
        if (first[i] !== second[i]) {
          return false;
        } else {
          isEqual = true;
        }
      }
    }
  }

  return isEqual;


}
