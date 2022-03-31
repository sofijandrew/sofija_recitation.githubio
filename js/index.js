function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function button2Clicked() {
  document.getElementById('button-2').classList.toggle('was-over');
  console.log('loaded');
}

function button3Clicked() {
  document.getElementById('button-3').classList.toggle('was-down');
}

function button4Clicked() {
  document.getElementById('button-2').classList.toggle('was-over');
  console.log('loaded');
}


function windowLoaded() {
  console.log('loaded');
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  document.getElementById('button-2').addEventListener('mouseover', button2Clicked);
  document.getElementById('button-3').addEventListener('mousedown', button3Clicked);
}


/*function windowLoaded() {
  console.log('loaded');
  document.getElementById('button-2').addEventListener('mouseover', button2Clicked);
}*/

//mouseover, mousedown, mouseup, mousemove
//mouseout

window.onload = windowLoaded;
