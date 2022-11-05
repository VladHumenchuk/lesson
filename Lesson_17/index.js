'use strict';

const whoWeAre = document.querySelector('.who-we-are');
const navigation = document.querySelector('.header');
const enjoy = document.querySelector('.enjoy');
const MeetOurTeamButtonRight = document.querySelector(
  '.buttons-shooter__right'
);
const main = document.querySelector('main');
const MeetOurTeamButtonRLeft = document.querySelector('.buttons-shooter__left');
const maps = document.querySelector('.contact-info__liflet-map');
//fixed Navigation
const getStiky = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    navigation.style.position = 'fixed';
    navigation.style.background = '#ffffffea';
  } else {
    navigation.style.position = 'absolute';
    navigation.style.background = '#ffffff00';
  }
  console.log('hello');
};
const observer = new IntersectionObserver(getStiky, {
  root: null,
  threshold: 0.1,
});
if (enjoy) {
  observer.observe(enjoy);
}

//Ready to learn?
const yacheykiProfesion = document.querySelectorAll(
  '.colection-body__profesion'
);
yacheykiProfesion.forEach((i) => {
  if (i.textContent === 'Marketing') {
    i.style.background = '#03cea4';
  } else if (i.textContent === 'HR & Recruting') {
    i.style.background = '#F89828';
  } else if (i.textContent === 'Management') {
    i.style.background = '#5A87FC';
  } else if (i.textContent === 'Design') {
    i.style.background = '#F52F6E';
  }
});

// карта
document.addEventListener('DOMContentLoaded', function () {
  console.log('hello map');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const map = L.map('info-map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup('Я тебе знайшов :)')
          .openPopup();
      },
      function () {
        const map = L.map('info-map').setView([49.449993, 28.523892], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
      }
    );
  }
});

// +++++++++++++++++++++++++++++++++++burger
const listBurger = document.querySelector('.menu-header__list');
const buttonBurger = document.querySelector('.header__burger');
const buttonActive = document.querySelector('.menu-header__list-active');

buttonBurger.addEventListener('click', function () {
  listBurger.classList.toggle('menu-header__list-active');
  document.querySelector('body').classList.toggle('body-hiden');
});
main.addEventListener('click', function () {
  listBurger.classList.add('menu-header__list-active');
  document.querySelector('body').classList.toggle('body-hiden');
});
