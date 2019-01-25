
const body = document.querySelector('body');
const happening = document.querySelector('#happening');



body.addEventListener('click', (event) => {
  if(event.target !== happening) {
    happening.style.height = '80px';
  }
  else {
    happening.style.height = '400px';
  }
});
