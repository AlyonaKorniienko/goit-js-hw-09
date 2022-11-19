// В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки, при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.

// Библиотека flatpickr​

// Используй библиотеку flatpickr для того чтобы позволить пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса. Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// Библиотека ожидает что её инициализируют на элементе input[type="text"], поэтому мы добавили в HTML документ поле input#datetime-picker.

// <input type="text" id="datetime-picker" />

// Вторым аргументом функции flatpickr(selector, options) можно передать необязательный объект параметров. Мы подготовили для тебя объект который нужен для выполнения задания. Разберись за что отвечает каждое свойство в документации «Options» и используй его в своем коде.

// Выбор даты​

// Метод onClose() из обьекта параметров вызывается каждый раз при закрытии элемента интерфейса который создает flatpickr. Именно в нём стоит обрабатывать дату выбранную пользователем. Параметр selectedDates это массив выбранных дат, поэтому мы берем первый элемент.

// Если пользователь выбрал дату в прошлом, покажи window.alert() с текстом "Please choose a date in the future".
// Если пользователь выбрал валидную дату (в будущем), кнопка «Start» становится активной.
// Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
// При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.
// Отсчет времени​

// При нажатии на кнопку «Start» скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс таймера, показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.

// Количество дней может состоять из более чем двух цифр.
// Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// НЕ БУДЕМ УСЛОЖНЯТЬ
// Если таймер запущен, для того чтобы выбрать новую дату и перезапустить его - необходимо перезагрузить страницу.
// Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.

// Форматирование времени​

// Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты. Обрати внимание, что она не форматирует результат. То есть, если осталось 4 минуты или любой другой составляющей времени, то функция вернет 4, а не 04. В интерфейсе таймера необходимо добавлять 0 если в числе меньше двух символов. Напиши функцию addLeadingZero(value), которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.

// Библиотека уведомлений​

// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.
// Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
    if (selectedDates[0] > Date.now()) {
      refs.button.disabled = false;
      Notiflix.Notify.success('Date is OK"');
      onTimerStart();
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.button.disabled = true;
      // console.log(obj.days);
    }

    function onTimerStart() {
      const timerId = setInterval(() => {
        timerValue = selectedDates[0] - Date.now();
        convertMs(timerValue);
        console.log(convertMs(timerValue));
        // console.log(typeof convertMs(timerValue));
        markupUpdate(obj);
        refs.button.disabled = true;
        onTimerStop();
      }, 1000);
    }
  },
};

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