
const body = document.querySelector('body');
const happening = document.querySelector('#happening');
const happeningToolbar = document.querySelector('#happening-toolbar');



body.addEventListener('click', (event) => {
  if(event.target !== happening) {
    happening.style.height = '38px';
    happeningToolbar.style.display = "none";
  }
  else {
    happening.style.height = '80px';
    happeningToolbar.style.display = "flex";
  }
});
