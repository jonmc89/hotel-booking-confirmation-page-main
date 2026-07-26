const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

const wifiPassword = document.getElementById('wifiPassword');
const copyBtn = document.getElementById('copyBtn');

menuBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_visble');
  mobileMenu.classList.add('mobile_menu_visible');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile_menu_visible');
  overlay.classList.remove('overlay_visble');
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(wifiPassword.textContent);
    console.log('Password copied!');
    window.alert('Password copied!');
  } catch (err) {
    console.error('Failed to copy:', err);
    window.alert('Failed to copy password');
  }
});
