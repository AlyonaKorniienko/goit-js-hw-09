function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let getEl = selector => document.querySelector(selector);

// onStartClick;
getEl('[data-start]').addEventListener('click', evt => {
  timerId = setInterval(() => {
    getEl('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
  getEl('[data-start]').disabled = true;
});

// onStopClick;
getEl('[data-stop]').addEventListener('click', e => {
  clearInterval(timerId);
  getEl('[data-start]').disabled = false;
});
