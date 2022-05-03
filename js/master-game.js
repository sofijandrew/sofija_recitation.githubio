


function circleClicked1() {
  document.getElementById('blue-circle').classList.toggle('was-clicked');
}
function circleClicked2() {
  document.getElementById('orange-circle').classList.toggle('was-clicked');
}
function circleClicked3() {
  document.getElementById('red-circle').classList.toggle('was-clicked');
}


function windowLoaded() {
  console.log('loaded');
  document.getElementById('blue-circle').addEventListener('click', circleClicked1);
  document.getElementById('orange-circle').addEventListener('click', circleClicked2);
  document.getElementById('red-circle').addEventListener('click', circleClicked3);
}

window.onload = windowLoaded;
