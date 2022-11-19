import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  button: document.querySelector('button[data-start]'),
  body: document.querySelector('body'),
  timer: document.querySelector('.timer'),
  field: document.querySelector('.field'),
  // field: document.querySelectorAll('.field'),
  value: document.querySelector('.value'),
  label: document.querySelector('.label'),
};

// const field = document.getElementsByClassName('field');
// console.log(field);

function timerStyle() {
  refs.body.style.backgroundColor = 'rgba(196, 196, 196, 0.8)';
  refs.timer.classList.add('timer_new');
  // refs.field.classList.add('field_new');
  // field.classList.add(field_new);
  // refs.value.classList.add('value_new');
  // refs.label.classList.add('label_new');
}
timerStyle();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    futureDate = selectedDates[0];
    if (selectedDates[0] > Date.now()) {
      refs.button.disabled = false;
      Notiflix.Notify.success('Date is OK"');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.button.disabled = true;
      // console.log(obj.days);
    }
    // return futureDate;
  },
};

// console.log(futureDate);
let timerId = null;
function onTimerStart() {
  timerId = setInterval(() => {
    timerValue = futureDate - Date.now();
    convertMs(timerValue);
    console.log(convertMs(timerValue));
    // console.log(typeof convertMs(timerValue));
    markupUpdate(obj);
    // refs.button.disabled = true;
    onTimerStop(timerValue);
  }, 1000);
}
let futureDate = null;
refs.button.addEventListener('click', onTimerStart());

let timerValue;
let obj = {};
convertMs(timerValue);
const calendar = flatpickr('#datetime-picker', options);
refs.button.setAttribute('disabled', true);

function onTimerStop() {
  if (timerValue === 0) {
    clearInterval(timerId);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return (obj = { days, hours, minutes, seconds });
}

function markupUpdate(o) {
  refs.days.textContent = `${obj.days}`;
  refs.hours.textContent = `${obj.hours}`;
  refs.minutes.textContent = `${obj.minutes}`;
  refs.seconds.textContent = `${obj.seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
