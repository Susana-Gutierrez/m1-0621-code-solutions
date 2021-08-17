/* exported intersection */

function intersection(first, second){
  var newFirst = first;
  var newSecond = second;
  var mixArray = [];
  var differenceArray = [];


  for (var x = 0; x < newFirst.length; x++) {
    mixArray.push(newFirst[x]);
  }

  for (var y = 0; y < newSecond.length; y++) {
    mixArray.push(newSecond[y])
  }


  for (var i = 0; i < newFirst.length; i++) {
    if (newSecond.includes(newFirst[i])) {
      differenceArray.push(newFirst[i]);
    }
  }

  return differenceArray;


}
