/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var arrayFirstName = person.firstName;
  var firstNameInitial = arrayFirstName[0];
  var arrayLastName = person.lastName;
  var lastNameInitial = arrayLastName[0];
  var initials = firstNameInitial + lastNameInitial;
  return initials;
}
