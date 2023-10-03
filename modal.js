const myMultipost = document.getElementById('portfolioModal');

const myRecentWorks = [
  {
    img: '',
    projectTitle: 'Awesome Books',
    description: 'This project is about a website that displays display a list of books added by a user. It allows one to add and remove books from that list. It was built using plain HTML, CSS, and JavaScript.',
    skills: ['html', 'css', 'javaScript'],
  },
];
const loadRecentWorks = () => {
  let cardRecentworks = '';
  for (let i = 0; i < myRecentWorks.length; i += 1) {
    const card = `
    <div class="img-data-and-btn-seemore">
            <div class="img-gymfit">
            <img src="images/awesomeBooks.png" class="multi-p-image" alt="multi">
            </div>
            <div class="div-informatn">
                <div class="for-med-multipost">
                <h4 class="multipost-h1">${myRecentWorks[i].projectTitle}</h4>
                </div>
                <div class="para-info">
                <p>${myRecentWorks[i].description}</p>
                </div>
                <div class="list-items">
                <ul>
                    <li>${myRecentWorks[i].skills[0]}</li>
                    <li>${myRecentWorks[i].skills[1]}</li>
                    <li>${myRecentWorks[i].skills[2]}</li>
                </ul>
                </div>
                <div class="button-see">
                <button class="button2" type="button">
                    See Project
                </button>
                </div>
            </div>
        </div>
        `;
    cardRecentworks += card;
  }
  myMultipost.innerHTML = cardRecentworks;
};
loadRecentWorks();

const projectViewPost = document.getElementById('recentProjectWorks');
const myRecentProjects = [
  {
    projectTitle: 'My To Do List',
    description: 'A simple to do list created using React.Js, Javascript, HTML and CSS. It allows users to add, remove and mark a task as complete!',
    skills: ['ReactJs', 'JavaScript', 'html', 'css'],
  },

  {
    projectTitle: 'Global Cryptocurrency - React App',
    description: 'This project entails a React-Redux application that fetches digital currency data from a coins API. It allows users to filter information by different types of digital coins.',
    skills: ['ReactJs', 'JavaScript', 'html', 'css'],
  },

  {
    projectTitle: 'Math Magician',
    description: 'A website that allows users to do simple calculations and read a math quote. Built with: React.js, JavaScript, CSS3 and HTML5.',
    skills: ['ReactJs', 'JavaScript', 'html', 'css'],
  }
];

const loadRecentProjects = () => {
  let cardRecentProjects = '';
  for (let i = 0; i < myRecentProjects.length; i += 1) {
    const card1 = `
        <div class="project-bg" id = "project-bigS>
        <h3 class="professionalHeading">${myRecentProjects[i].projectTitle}</h3>
        <p class="daily-section">${myRecentProjects[i].description}</p>
        <ul class="socials">
        <li>${myRecentProjects[i].skills[0]}</li>
        <li>${myRecentProjects[i].skills[1]}</li>
        <li>${myRecentProjects[i].skills[2]}</li>
        </ul>
        <button class="button2" type="button">See Project</button>
    </div>
    `;
    cardRecentProjects += card1;
  }
  projectViewPost.innerHTML = cardRecentProjects;
};
loadRecentProjects();

const projectPopUp = document.getElementById('popupPage');
const myPopUp = [
  {
    projectTitle: 'Awesome Books',
    projectTitleDesktop: 'Awesome Books',
    skills: ['html', 'bootstrap', 'JavaScript'],
    img: './images/awesomeBooks.png',
    image: './images/awesomeBooks.png',
    pageDescription: 'This project is about a website that displays display a list of books added by a user. It allows one to add and remove books from that list. It was built using plain HTML, CSS, and JavaScript.',
    pageDescriptionDesktop: 'This project is about a website that displays display a list of books added by a user. It allows one to add and remove books from that list. It was built using plain HTML, CSS, and JavaScript.',
    links: ['https://asnganje.github.io/awesomebookES6/', 'https://asnganje.github.io/My-Portfolio/'],
  },

];
const loadPopUp = (id) => {
  id = 0;
  const myPop = `
    <div class="portfolio-modal">
      <div class="p-modal-header">
        <div class="modal-title"><h3>${myPopUp[id].projectTitle}</h3></div>
        <div class="modal-title1"><h3>${myPopUp[id].projectTitleDesktop}</h3></div>
        <button data-close-btn1 class="modal-close-btn" type="button">&times;</button>
      </div>

      <div class="p-modal-body">
        <div class="p-modal-icons">
          <ul class = "modal-listed">
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby on rails</li>
          </ul>
        </div>
        <div class="p-modal-img"><img src="${myPopUp[id].img}" class = "mobl-img" alt="snapshot portfolio"></div>
        <div class="p-modal-img1"><img class="imgsoln" src="${myPopUp[id].image}" alt="snapshot portfolio"></div>
      </div>

      <div class="p-modal-para">
          <p class="modal-para1">${myPopUp[id].pageDescription}</p>
          <p class="modal-para2">${myPopUp[id].pageDescriptionDesktop}</p>
          <div class="p-modal-footer" id= "mobile">
            <a href="${myPopUp[id].links[0]}" class="button-popup-1">See Live</a>
            <a href="${myPopUp[id].links[1]}" class="button-popup-2">See Source</a>
          </div>
      </div>
    </div>`;
  projectPopUp.innerHTML = myPop;
};
loadPopUp();
const popUpPage = document.querySelector('.parent-pop');

const closePopup = document.querySelector('.modal-close-btn');

const trigger = document.querySelectorAll('.button2');

function openPage() {
  popUpPage.classList.toggle('show-modal');
}

function winOnClick(event) {
  if (event.target === popUpPage) {
    openPage();
  }
}

trigger.forEach((element) => {
  element.addEventListener('click', openPage);
});

closePopup.addEventListener('click', openPage);

window.addEventListener('click', winOnClick);
