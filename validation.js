const userRegex =  /[A-Z]/;
const thisForm = document.getElementById('dataForm');

thisForm.addEventListener('submit', (e) => { 
const { email } = thisForm.elements;
const mailAd = email.value;
const safer = document.querySelector('#validation');
if ( userRegex.test(mailAd) === true) {
    e.preventDefault();
    const info = 'Sorry! Email must be written in small letters only.';
    safer.innerHTML = info;
}
});
