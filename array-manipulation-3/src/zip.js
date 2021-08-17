/* exported zip */

function zip(first, second) {
  var newArray = [];
  var index = 0;

  if ((first.length === second.length) || (first.length < second.length)) {
    index = first.length;
  } else if (first.length > second.length) {
    index = second.length;
  }

  for (var i = 0; i < index; i++) {
    newArray.push([first[i], second[i]]);
  }

  return newArray;

}
