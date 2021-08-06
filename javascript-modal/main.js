
var $openModelButton = document.querySelector('.open-modal');
var $hidden = document.getElementById('hidden');
var $noButton = document.querySelector('.button-no');
var $mainDiv = document.querySelector('.main-div');
var $overlay = document.querySelector('.overlay');

function handleClickOpenModel(event) {
  $hidden.style.display = 'flex';
  $mainDiv.style.background = 'black';
  $mainDiv.style.position = 'relative';
  $overlay.style.background = 'black';
}

function handleClickNo(event) {
  $hidden.style.display = 'none';
  $mainDiv.style.background = 'white';
  $overlay.style.background = 'none';

}

$openModelButton.addEventListener('click', handleClickOpenModel);
$noButton.addEventListener('click', handleClickNo);
