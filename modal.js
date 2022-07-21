const myMultipost = document.getElementById('portfolioModal');

const myRecentWorks = [
  {
    img: '',
    projectTitle: 'Multipost Stories',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['css', 'html', 'bootstrap', 'ruby'],
  },
];
const loadRecentWorks = () => {
  let cardRecentworks = '';
  for (let i = 0; i < myRecentWorks.length; i += 1) {
    const card = `
    <div class="img-data-and-btn-seemore">
            <div class="img-gymfit">
            <img src="images/multi-post.png" class="multi-p-image" alt="multi">
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
                    <li>${myRecentWorks[i].skills[3]}</li>
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
    projectTitle: 'Profesional Art Printing Data',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['html', 'bootstrap', 'ruby'],
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['html', 'bootstrap', 'ruby'],
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['html', 'bootstrap', 'ruby'],
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['html', 'bootstrap', 'ruby'],
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['html', 'bootstrap', 'ruby'],
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skills: ['html', 'bootstrap', 'ruby'],
  },
];

const loadRecentProjects = () => {
  let cardRecentProjects = '';
  for (let i = 0; i < myRecentProjects.length; i += 1) {
    const card1 = `
        <div class="project-bg">
        <h3 class="professional-heading">${myRecentProjects[i].projectTitle}</h3>
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
    projectTitle: 'Multi Post Stories',
    projectTitleDesktop: 'Keeping track of hundreds  of components website',
    skills: ['html', 'bootstrap', 'ruby'],
    img: './images/modal-portfolio-mobile.svg',
    image: './images/desktopverson.png',
    pageDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    pageDescriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. remaining ',
    links: ['https://github.com/asnganje', 'https://asnganje.github.io/My-Portfolio/'],
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
