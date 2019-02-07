
const body = document.querySelector('body');
const happening = document.querySelector('#happening');
const happeningToolbar = document.querySelector('#happening-toolbar');
const toolboxIcons = document.querySelectorAll('.toolbox-icon');


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

toolboxIcons.forEach( function (icon) {
  let span = document.createElement('span');
  span.classList.add('tooltip');

  span.textContent = 'hello';
  icon.parentNode.parentNode.prepend(span);
  span.style.display = 'none';


  span.parentNode.addEventListener('mouseenter', (event) => {
    span.style.display = 'block';
  });

  span.parentNode.addEventListener('mouseleave', (event) => {
    span.style.display = 'none';
  });

});
