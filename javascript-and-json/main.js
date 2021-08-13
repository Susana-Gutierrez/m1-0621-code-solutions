
var book = [{
  isbn:'001-001',
  title:'Database and Design',
  author:'Susana Aguilar',
}, {
  isbn:'002-002',
  title:'Linux Administration',
  author:'Seth Grim',
  }, {
    isbn: '003-003',
    title: 'Javascript and CSS',
    author: 'Joe Black',
  }];


console.log ('Array of books:', book);
console.log ('Typeof book: ', typeof book);

console.log(JSON.stringify(book));
console.log('Typeof JSON.stringify(book): ', typeof JSON.stringify(book));

var student = '[{"id":101,"name":"Susana Aguilar"}]';

console.log('Studen in JSON format: ', student);
console.log('typeof: ', typeof student);

var newStudentArray = JSON.parse(student);
console.log('newStudentArray: ', newStudentArray);
console.log('typeof newStudentArray: ', typeof newStudentArray);
