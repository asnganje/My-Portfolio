const topbar = document.querySelector('.topbar');
const hamburger = document.getElementById('hamburger-menu');
const topnav = document.querySelectorAll('.desktop-nav');
function myFunction() {
  if (topbar.className === 'topbar') { topbar.classList.add('visible'); hamburger.innerHTML = '&#10006'; } else { topbar.classList.remove('visible'); hamburger.innerHTML = '&#9776'; }
}
hamburger.addEventListener('click', myFunction);
topnav.forEach((n) => n.addEventListener('click', myFunction));

/**Form validation **/
const userRegex =  /[A-Z]]/;
const thisForm = document.getElementById('dataForm');

thisForm.addEventListener('submit', (e) => {
  const { email } = thisForm.elements;
  const mailAddress = email.value;
  const safer = document.querySelector('#security-validation'); 
  if ( userRegex.test(mailAddress) === false) {
    e.preventDefault();
    const info = 'Sorry! Email must be written in small letters only.';
    safer.innerHTML = info;
  }
});