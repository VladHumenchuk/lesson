const jabaRyh = document.querySelector('.pesa-1');
const booton = document.querySelectorAll('.content-1__answer');
const buttonNext = document.querySelector('.content-1__button-next');
const blokContent = document.querySelectorAll('.content-1');
const blockJaba = document.querySelectorAll('.block-right');
const lichilnik = document.querySelector('.headert__level');
const booton2 = document.querySelectorAll('.content-2__answer');
const jabaBlock2 = document.querySelector('.jaba-all');
const cosmosViner = document.querySelector('.forg-cosmos');
const doit = function () {
  let colorelement1;
  let res;
  for (let i = 0; i < booton.length; i++) {
    booton[i].addEventListener('click', function () {
      // жаба бігає по листках
      jabaRyh.style.justifyContent = booton[i].textContent;
      res = booton[i].textContent;
      // кольори кнопок
      if (res === 'flex-start') {
        booton[i].style.backgroundColor = 'green';
        booton[i].style.color = 'white';
        colorelement1 = booton[i].style.backgroundColor;
        buttonNext.addEventListener('click', function () {
          blokContent[0].classList.add('bloc-none');
          blokContent[1].classList.remove('bloc-none');
          blockJaba[0].classList.add('bloc-none');
          blockJaba[1].classList.remove('bloc-none');
          lichilnik.textContent = 'Рівень 2 із 2';
          for (let i = 0; i < booton2.length; i++) {
            booton2[i].addEventListener('click', function () {
              jabaBlock2.style.justifyContent = booton2[i].textContent;
              res = booton2[i].textContent;
              if (res === 'space-between') {
                booton2[i].style.backgroundColor = 'green';
                booton2[i].style.color = 'white';
                cosmosViner.classList.remove('bloc-none');
              } else {
                booton2[i].style.backgroundColor = 'rgb(236, 187, 187)';
              }
            });
          }
        });
      }
      if (res !== 'flex-start') {
        booton[i].style.backgroundColor = 'rgb(236, 187, 187)';
      }
    });
  }
};
doit();
