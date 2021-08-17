/* exported titleCase */

function titleCase(title) {

  var arrayTitle = title.split(' ');
  var newArrayTittle = [];
  var specialWord = ['Web', 'API', 'JavaScript', 'JavaScript:', 'In-Depth', 'Self-Taught'];
  var colon = false;



  /*Changing first lettr*/

  for (var i = 0; i < arrayTitle.length; i++) {
    if ((arrayTitle[i].length > 3) || (i === 0)){
      var firstLetter = arrayTitle[i][0].toUpperCase();
    } else {
      var firstLetter = arrayTitle[i][0];

    }
      var arrayWord = arrayTitle[i].split('');
      arrayWord.splice(0, 1, firstLetter);
      var word = arrayWord.join('');
      newArrayTittle[i] = word;
  }



  for (var i = 0; i < newArrayTittle.length; i++) {
    for (var x = 0; x < specialWord.length; x++) {
      if (newArrayTittle[i].toLowerCase() === specialWord[x].toLowerCase()) {
        newArrayTittle.splice(i, 1, specialWord[x]);
      }
    }
  }


  /* check for : */

  for (var y = 0; y < newArrayTittle.length; y++) {
    newArray = newArrayTittle[y].split('');
    for (var z = 0; z < newArray.length; z++){

      if ((z===0) && (colon===true)){
        var letter = newArray[z].toUpperCase();
        newArray.splice(0, 1, letter);
        colon = false;
      }
      if ((z === newArray.length - 1) && (newArray[z]===':')){
        var colon = true;
      }
    }
    newArrayTittle.splice(y, 1, newArray.join(''));
  }


  return newArrayTittle.join(' ');

}
