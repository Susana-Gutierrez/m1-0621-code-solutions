var student = {
  firstName: 'Susana',
  lastName: 'Gutierrez',
  age: 40
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Network Technician';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

console.log('value of student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 2018
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = true;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Cabo',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
