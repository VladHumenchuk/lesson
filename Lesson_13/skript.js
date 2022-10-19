const samolotik = document.querySelector('.samoletik');
const djostok = document.querySelector('.djostik');
const games = document.querySelector('.games');
const text = document.querySelector('.text');
const music = document.querySelector('.music');
const corabel = document.querySelector('.games__korabel');

samolotik.addEventListener('click', function () {
  samolotik.classList.toggle('_samoletik-polet');
  document.querySelector('.list-one').style.color = 'red';
});

djostok.addEventListener('click', function () {
  djostok.classList.toggle('djostik--active');
  document.querySelector('.list-two').style.color = 'red';
  games.classList.toggle('opacity');
  text.classList.toggle('opacity');
  music.classList.toggle('embed--active');
});

document.addEventListener('keydown', function (e) {
  console.log(e.code);
  let polojenaCorabel = 250;
  let polojenaCorabUpDown = 200;

  if (e.code === 'ArrowRight') {
    polojenaCorabel += 100;
  }
  if (e.code === 'ArrowLeft') {
    polojenaCorabel -= 100;
  }
  if (e.code === 'ArrowUp') {
    polojenaCorabUpDown -= 100;
  }
  if (e.code === 'ArrowDown') {
    polojenaCorabUpDown = 200;
  }
  let cordinate = `translate(${polojenaCorabel}%, ${polojenaCorabUpDown}%)`;
  corabel.style.transform = cordinate;
});
