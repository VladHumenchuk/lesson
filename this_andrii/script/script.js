'use strict';
//Burger
const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.navigation');
const headerbuuton = document.querySelector('.header__right-bolock');
const sliderBlock = document.querySelector('.slider');
const buttonDet = document.querySelector('.button-det');
//Burger
if (burgerMenu) {
  burgerMenu.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    burgerMenu.classList.toggle('_active');
    headerMenu.classList.toggle('navigation_active');
    headerbuuton.classList.toggle('button_activ');
  });
}
const burgerNot = function () {
  if (burgerMenu.classList.contains('_active')) {
    document.body.classList.remove('lock');
    burgerMenu.classList.remove('_active');
    headerMenu.classList.remove('navigation_active');
  }
};
// Плавне прокручування
document
  .querySelector('.navigation__list')
  .addEventListener('click', function (e) {
    burgerNot();
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('navigation__link')) {
      const href = e.target.getAttribute('href');
      console.log(href);
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });

buttonDet.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.operator').scrollIntoView({ behavior: 'smooth' });
});
document
  .querySelector('.header__imege')
  .addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.work').scrollIntoView({ behavior: 'smooth' });
  });

//Slider
const slides = document.querySelectorAll('.slider__slide');
const slider = document.querySelector('.slider__list');
const sliderButtonLeft = document.querySelector('.slider__button--left');
const sliderButtonRigt = document.querySelector('.slider__button--right');
let curentSlide = 0;
const slidsNumber = slides.length;
const muvToSlid = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translate(${(index - slide) * 100}%)`;
  });
};
muvToSlid(0);

sliderButtonRigt.addEventListener('click', function () {
  if (curentSlide === slidsNumber - 1) {
    curentSlide = 0;
  } else {
    curentSlide++;
  }
  muvToSlid(curentSlide);
});

sliderButtonLeft.addEventListener('click', function () {
  if (curentSlide === 0) {
    curentSlide = slidsNumber - 1;
  } else {
    curentSlide--;
  }
  muvToSlid(curentSlide);
});

//Прокрутка слайдера
const sliderTimes = function (stop) {
  if (stop === 'stop') {
    return;
  } else {
    setInterval(() => {
      if (curentSlide === slidsNumber - 1) {
        curentSlide = 0;
      } else {
        curentSlide++;
      }
      muvToSlid(curentSlide);
    }, 4000);
  }
};

sliderTimes();
const nav = document.querySelector('.slovakia');

// Прилипаюча навігація
const header = document.querySelector('.header');
const work = document.querySelector('.work');
const navHeight = header.getBoundingClientRect().height;
// console.log(navHeight);
const getStickyNav = function (entries) {
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) {
    header.style.position = 'fixed';
    document.querySelector('.header__right-bolock').style.display = 'block';
    document.querySelector('.header__navigation').style.justifyContent =
      'flex-start';
  } else {
    header.style.position = 'absolute';
    document.querySelector('.header__right-bolock').style.display = 'none';
    document.querySelector('.header__navigation').style.justifyContent =
      'flex-end';
  }
};
const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(work);

// Поява частин сайту
const allSections = document.querySelectorAll('.section');

const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
