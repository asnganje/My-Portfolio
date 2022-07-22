const userRegex = /[A-Z]/;
const thisForm = document.getElementById('dataForm');
thisForm.addEventListener('submit', (e) => {
  const { email } = thisForm.elements;
  const mailAd = email.value;
  const safer = document.querySelector('#validation');
  if (userRegex.test(mailAd) === true) {
    e.preventDefault(); const info = 'Sorry! Email must be written in small letters only.'; safer.innerHTML = info;
  }
});
const storeName = document.getElementById('fullName');
const storeEmail = document.getElementById('email');
const infoS = document.getElementById('her');

function populateStore () {
  const dataStorageObject = {
    name: storeName.value,
    email: storeEmail.value,
    msg: infoS.value,
  };

  localStorage.setItem('data', JSON.stringify(dataStorageObject));
}

storeName.addEventListener('input', populateStore);
storeEmail.addEventListener('input', populateStore);
infoS.addEventListener('input', populateStore);

window.addEventListener('load', () => {
  const capturedData = JSON.parse(localStorage.getItem('data'));
  storeName.value = capturedData.name;
  storeEmail.value = capturedData.email;
  infoS.value = capturedData.msg;
});