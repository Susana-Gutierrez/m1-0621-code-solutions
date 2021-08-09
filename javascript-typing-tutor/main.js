var parent = document.getElementById('main-span');
var child_nodes = parent.childNodes;
var i = 1;



function keyhandler(event){
  var name = event.key;
  var code = event.code;
  if (name === child_nodes[i].textContent) {
    child_nodes[i].style.textDecoration = 'none';
    child_nodes[i].className = 'good-character';
    this.i = i++;
    child_nodes[i].style.textDecoration = 'underline';
  } else if ((child_nodes[i].textContent === '\n          ') && (name === ' ')) {
    this.i = i++;
    child_nodes[i].style.textDecoration = 'underline';
  } else {
    child_nodes[i].className = 'bad-character';
  }

}


child_nodes[i].style.textDecoration  = 'underline';
document.addEventListener("keydown", keyhandler);
