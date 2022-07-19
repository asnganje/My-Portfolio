
function myFunction(){
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

}

