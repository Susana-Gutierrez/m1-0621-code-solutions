/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return ('true');
  } else {
    return ('false');
  }
}

function isEven(number) {
  var value = number % 2;
  if (value === 0) {
    return ('true');
  } else {
    return ('false');
  }
}

function startsWithJ(string) {
  var firstLetter = string[0];

  if (firstLetter === 'J') {
    return ('true');
  } else {
    return ('false');
  }
}

function isOldEnoughToDrink(person) {
  var value = person.age;
  if (value >= 21) {
    return ('true');
  } else {
    return ('false');
  }

}

function isOldEnoughToDrive(person) {
  var value = person.age;
  if (value >= 16) {
    return ('true');
  } else {
    return ('false');
  }

}

function isOldEnoughToDrinkAndDrive(person) {
  var value = person.age;
  if (value >= 16) {
    return ('false');
  } else {
    return ('false');
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return ('neutral');
  } else if (pH >= 0 && pH <= 7) {
    return ('acid');
  } else if (pH <= 14 && pH > 7) {
    return ('base');
  } else {
    return ('invalid pH level');
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return ('We\'re the warner brothers!');
  } else if (name === 'dot') {
    return ('I\'m cure~');
  } else {
    return ('Goodnight everybody!');
  }
}
