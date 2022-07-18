function myFunction() {
  let x = document.querySelector('.topbar')
  if (x.className === "topbar") {
    x.classList.add('visible');
  }
  else {
    x.classList.remove('visible');
  }
}
