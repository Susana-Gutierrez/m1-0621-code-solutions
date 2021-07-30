
function handleClick(event) {

  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);

}

var newVariable = document.querySelector('.click-button');
newVariable.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);

}

var newVariable2 = document.querySelector('.hover-button');
newVariable2.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);

}

var newVariable3 = document.querySelector('.double-click-button');
newVariable3.addEventListener('dblclick', handleDoubleClick);
