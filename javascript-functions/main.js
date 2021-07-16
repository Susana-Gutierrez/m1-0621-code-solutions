
/* 1 */

function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}

var seconds = convertMinutesToSeconds(5);
console.log('5 minutes are: ' + seconds + ' seconds.');

/* 2 */

function greet(name) {
  return ('Hey, ' + name);
}

console.log(greet('Susana'));

/* 3 */

function getArea(width, height) {
  return (width * height);
}

console.log('Rectangle area: ', getArea(17, 42));

/* 4 */

function getFirstName(person) {
  return (person.firstName);
}

console.log('First Name: ' + getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

/* 5 */

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return (array[lastIndex]);
}

console.log('Last array element: ' + getLastElement(['propane', 'and', 'propane', 'accessories']));
