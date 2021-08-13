
var $tabContainer = document.querySelector('.tab-container');
var $tab = document.getElementsByClassName('tab');
var $view = document.getElementsByClassName('view');


function handleClickContainer(event){

  if (event.target.matches('.tab')){
    var dataView = event.target.getAttribute('data-view');

    for (var i = 0; i < $tab.length; i++){
      if ($tab[i] === event.target){
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    for (var x = 0; x < $view.length; x++){
      if (dataView === $view[x].getAttribute('data-view')){
        $view[x].className = 'view';
      } else {
        $view[x].className = 'view hidden';
      }
    }
  }

}


$tabContainer.addEventListener('click', handleClickContainer);
