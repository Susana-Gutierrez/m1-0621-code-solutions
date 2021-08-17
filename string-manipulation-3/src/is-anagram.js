/* exported isAnagram */

function isAnagram(firstString, secondString){
  var arrayFirstString = [];
  var arraySecondString = [];


  for (var i = 0; i < firstString.length; i++){
    if (firstString[i]!==' '){
      arrayFirstString.push(firstString[i]);
    }
  }


  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      arraySecondString.push(secondString[j]);
    }
  }


  if (arrayFirstString.length !== arraySecondString.length){
    return false;
  } else {

    for (var x = 0; x < arrayFirstString.length; x++){
      for (var z = 0; z < arraySecondString.length; z++){
        if (arrayFirstString[x] === arraySecondString[z]){
          arraySecondString.splice(z, 1);
          break;
        }
      }

    }

    if (arraySecondString.length === 0){
      return true;
    } else {
      return false;
    }

  }

}
