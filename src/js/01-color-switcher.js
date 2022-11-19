// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// let getEl = selector => document.querySelector(selector);

// // onStartClick;
// getEl('[data-start]').addEventListener('click', evt => {
//   timerId = setInterval(() => {
//     getEl('body').style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   getEl('[data-start]').disabled = true;
// });

// // onStopClick;
// getEl('[data-stop]').addEventListener('click', e => {
//   clearInterval(timerId);
//   getEl('[data-start]').disabled = false;
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');
// const body = document.querySelector('body');

// // onStartClick;
// startBtn.addEventListener('click', onStartClick);

// function onStartClick(evt) {
//   const timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   startBtn.disabled = true;
//   console.log(startBtn);
// }

// // onStopClick;
// stopBtn.addEventListener('click', e => {
//   clearInterval(timerId);
//   startBtn.disabled = false;
// });

// =======

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  console.log(startBtn);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
