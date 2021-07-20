var number1 = 1;
var number2 = 7;
var number3 = 12;

var maximumValue = Math.max(number1, number2, number3);

console.log('Maximum Value: ', maximumValue);

var heroes = ['Batman', 'Superman', 'Wonder Woman', 'Iron Man'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [{
  title: 'Database Design',
  author: 'Susana Gutierrez'
}, {
  title: 'Programming in Linux',
  author: 'Bryan Brown'
}, {
  title: 'Java 2',
  author: 'Seth Grimm'
}];

console.log(library);

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Susana Gutierrez';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
