/* exported union */

function union(first, second) {

  var newFirst = first;
  var newSecond = second;
  var mixArray = [];
  var unionArray = [];


  for (var x = 0; x < newFirst.length; x++) {
    mixArray.push(newFirst[x]);
  }

  for (var y = 0; y < newSecond.length; y++) {
    mixArray.push(newSecond[y])
  }


  for (var i = 0; i < mixArray.length; i++) {
    if (!unionArray.includes(mixArray[i])) {
      unionArray.push(mixArray[i]);
    }
  }

  return (unionArray);


}
