function myFunction() {
  const x = document.querySelector('.topbar');
  const btn = document.getElementById('hamburger-menu');

  if (x.className === 'topbar') { x.classList.add('visible'); btn.innerHTML = '&#10006'; }
  else { x.classList.remove('visible'); btn.innerHTML = '&#9776'; }
}