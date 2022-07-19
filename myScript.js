/* eslint-disable no-unused-vars */
function myFunction() {
  const x = document.querySelector('.topbar');
  const btn = document.getElementById('hamburger-menu');

  if (x.className === 'topbar') { x.classList.add('visible'); btn.innerHTML = '&#10006'; } else {
    x.classList.remove('visible'); btn.innerHTML = '&#9776';
    x.classList.toggle('visible');
  }
}
/* eslint-disable no-unused-vars */ 

/**const dispMenu = document.querySelector('.desktop-nav');
dispMenu.addEventListener('click', show)
function show() {
  dispMenu.style.display = 'flex';
  dispMenu.style.dispMenu.display = 'column';
}
/**function myFunction(){
  const hamburg = document.querySelector('.hamburger-menu');
  const top = document.querySelector('.topbar');
if (hamburg.className === 'hamburger-menu') 
{hamburg.classList.add('visible'); hamburg.innerHTML = '&#10006'; } 

if (top.className === 'topbar') 
{ top.classList.add('visible');} 

else {
  hamburg.classList.remove('visible'); hamburg.innerHTML = '&#9776';
  hamburg.classList.toggle('visible');
}

}**/






