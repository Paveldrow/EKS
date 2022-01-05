$(document).ready(function () {
  $('.pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 500,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': 'red',
      'bulletsColor': 'red',
      'position': 'right',
      'tooltips': ['section1', 'section2', 'section3', 'section4']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) { },
    afterLoad: function (anchorLink, index) { },
    afterRender: function () { },
  });
});

const firstSection = document.querySelector('.loader');

if (firstSection) {
  firstSection.classList.remove('loader');
}

const body = document.querySelector('.page__body');
const gallery = document.querySelector('.gallery');

if (gallery) {
  gallery.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('gallery__img')) {
      body.style.overflow = 'hidden';
      const background = document.createElement('div')
      background.classList.add('background');
      evt.target.classList.add('gallery__full-photo');
      evt.target.classList.remove('gallery__img');

      body.appendChild(background);
      const fullPhoto = document.querySelector('.gallery__full-photo');

      background.addEventListener('click', (evt) => {
        body.style.overflow = 'visible';

        fullPhoto.classList.add('gallery__img');
        fullPhoto.classList.remove('gallery__full-photo');
        background.remove();
      });
    };
  });
}

// const mainContent = document.querySelector('.pagepiling');
// const bottomLength = mainContent.getBoundingClientRect().bottom;
// if (bottomLength < (window.innerWidth) / 2) {
//   console.log(bottomLength);
// }

// const buttonScrollTop = document.querySelector('.contacts__top-link')

// buttonScrollTop.addEventListener('click', () => {
//   window.scrollTo(0, 0);
// });
const menu = document.querySelector('.main-nav__list');
const buttonMenu = document.querySelector('.main-nav__button');
buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('main-nav__button--active');
  menu.classList.toggle('main-nav__list--opened');
  body.classList.toggle('page__body--opened-menu');
})

