
const body = document.querySelector('body');
const happening = document.querySelector('#happening');
const happeningToolbar = document.querySelector('#happening-toolbar');
const toolboxIcons = document.querySelectorAll('.toolbox-icon');

const tooltipMessages = [
  'Add photos or video',
  'Add a GIF',
  'Add poll',
  'Add location'
]

// Expands tweet text area when clicked
body.addEventListener('click', (event) => {
  if(event.target !== happening) {
    happening.style.height = '22px';
    happeningToolbar.style.display = "none";
  }
  else {
    happening.style.height = '66px';
    happeningToolbar.style.display = "flex";
  }
});

// Creates, hides and shows tooltips for toolbox icons
toolboxIcons.forEach( function (icon, index) {
  let span = document.createElement('span');
  span.classList.add('tooltip');
  span.textContent = tooltipMessages[index];
  icon.parentNode.parentNode.prepend(span);
  span.style.display = 'none';

  span.parentNode.addEventListener('mouseenter', (event) => {
    span.style.display = 'block';
  });

  span.parentNode.addEventListener('mouseleave', (event) => {
    span.style.display = 'none';
  });

});
