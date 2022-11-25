'use strict';

// Паралакс на мінімалках або без паралакс ефекту
const imege = document.querySelector('.fon__imege');
function parallax(event) {
  imege.style.transform = `translate(${event.clientX / 30}px,${
    event.clientY / 30
  }px)`;
}
document.addEventListener('mousemove', parallax);
// калькулятор
const weight = document.getElementById('vag');
const growth = document.getElementById('rist');
const button = document.querySelector('.form__button');
const contentConclusionText = document.querySelector(
  '.content__text-conclusion'
);
const contentConclusion = document.querySelector('.content__conclusion');
const hrest = document.querySelector('.content__hrest');
let imt;
let conclusion;
const getImt = (w, h) => w / (h / 100) ** 2;
const getImtResultat = function (x) {
  imt = x;
  if (x < 18.5 && x > 0) {
    conclusion = 'Дефіцит маси тіла';
  } else if (x > 18.5 && x <= 24.9) {
    conclusion = 'Норма';
  } else if (x > 25 && x <= 29.9) {
    conclusion = 'Надмірна маса тіла';
  } else if (x > 30 && x < 34.9) {
    conclusion = 'Ожиріння І ступеню';
  } else if (x > 35 && x <= 39.9) {
    conclusion = 'Ожиріння ІІ ступеню';
  } else if (x > 40 && 50 < x) {
    conclusion = 'Ожиріння ІІІ ступеню';
  } else {
    conclusion = 'Введіть коректні дані';
  }
};
const visiblResultat = function (x) {
  contentConclusionText.textContent = x;
  contentConclusion.classList.remove('hiden-content');
  weight.value = '';
  growth.value = '';
};

button.addEventListener('click', function () {
  const weightValue = weight.value;
  const growthValue = growth.value;
  const resultat = getImt(weightValue, growthValue);
  getImtResultat(resultat);
  console.log(resultat);
  console.log(conclusion);
  visiblResultat(conclusion);
});
hrest.addEventListener('click', function () {
  contentConclusion.classList.add('hiden-content');
});
