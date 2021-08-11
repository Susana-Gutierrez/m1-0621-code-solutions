
var $newVariable = document.querySelector('.task-list');
$newVariable.addEventListener('click', handleClink);

function handleClink(event){
  console.log ('event.target: ', event.target);
  console.log ('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var r1 = event.target.closest('.task-list-item');
    console.log (r1);
    r1.remove();

  }

}
