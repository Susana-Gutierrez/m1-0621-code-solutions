/* exported difference */

function difference(first, second) {
  var newFirst = first;
  var newSecond = second;
  var mixArray = [];
  var differenceArray = [];
  var lastArray = [];

  for (var x = 0; x < newFirst.length; x++){
    mixArray.push(newFirst[x]);
  }

  for (var y = 0; y < newSecond.length; y++){
    mixArray.push(newSecond[y])
  }


  for (var i = 0; i < newFirst.length; i++){
    if (newSecond.includes(newFirst[i])){
      differenceArray.push(newFirst[i]);
    }
  }



  for (var z = 0; z < mixArray.length; z++) {
    if (!differenceArray.includes(mixArray[z])) {
      lastArray.push(mixArray[z]);
    }
  }


  return lastArray;

}
