const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_visble');
  mobileMenu.classList.add('mobile_menu_visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile_menu_visible');
  overlay.classList.remove('overlay_visble');
});
