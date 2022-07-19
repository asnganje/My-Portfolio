const topbar = document.querySelector('.topbar');
const hamburger = document.getElementById('hamburger-menu');
const topnav = document.querySelectorAll('.desktop-nav');
function myFunction() {
if (topbar.className === 'topbar') { topbar.classList.add('visible'); 
  hamburger.innerHTML = '&#10006'; } else {
  topbar.classList.remove('visible'); 
  hamburger.innerHTML = '&#9776'; }
}
hamburger.addEventListener('click', myFunction);
topnav.forEach((n) => n.addEventListener('click', myFunction));