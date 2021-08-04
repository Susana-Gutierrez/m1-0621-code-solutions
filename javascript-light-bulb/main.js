
var $switchN = document.querySelector('.on');
var $light = document.querySelector('.light');

function handleClick(event) {
  if ($switchN.className === 'on') {
    $switchN.className = 'off';
    $light.className = 'dark';
  } else {
    $switchN.className = 'on';
    $light.className = 'light';
  }

}

$switchN.addEventListener('click', handleClick);
