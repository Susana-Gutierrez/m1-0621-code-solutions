
var $form = document.forms[0];
console.log($form);

function handleSubmit(event) {
  event.preventDefault();
  var formObject = {
    nane: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(formObject);
  $form.reset();

}

$form.addEventListener('submit', handleSubmit);
