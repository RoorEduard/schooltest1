const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('change', function() {
  if (this.checked) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});