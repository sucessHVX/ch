const title = document.querySelector('#title');
const body = document.body;

title.addEventListener('mouseenter', () => {
  title.innerText = 'The mouse is here!';
  title.style.color = 'green';
});

title.addEventListener('mouseleave', () => {
  title.innerText = 'The mouse is gone!';
  title.style.color = 'blue';
});

window.addEventListener('resize', () => {
  title.innerText = 'You just resized!';
  title.style.color = 'purple';
});

body.addEventListener('contextmenu', () => {
  title.innerText = 'That was a right click!';
  title.style.color = 'orange';
});
