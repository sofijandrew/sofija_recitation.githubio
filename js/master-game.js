
//make circles disappear when clicked
///option 1


////////option 2
function circleClicked() {
  document.getElementById('blue-circle').classList.toggle('was-clicked');
}
function circleClicked() {
  document.getElementById('orange-circle').classList.toggle('was-clicked');
}
function circleClicked() {
  document.getElementById('red-circle').classList.toggle('was-clicked');
}


function windowLoaded() {
  console.log('loaded');
  document.getElementById('blue-circle').addEventListener('click', circleClicked);
  document.getElementById('orange-circle').addEventListener('mouseover', circleClicked);
  document.getElementById('red-button').addEventListener('mousedown', circleClicked);
}

window.onload = windowLoaded;
