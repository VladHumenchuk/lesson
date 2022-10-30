'use strict';

const whoWeAre = document.querySelector('.who-we-are');
const navigation = document.querySelector('.header');
const enjoy = document.querySelector('.enjoy');
const MeetOurTeamButtonRight = document.querySelector(
  '.buttons-shooter__right'
);
const MeetOurTeamButtonRLeft = document.querySelector('.buttons-shooter__left');

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
observer.observe(enjoy);

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
