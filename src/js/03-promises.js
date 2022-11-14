// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.
// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let firstDelay = Number(formRef.delay.value);
  let stepDelay = Number(formRef.step.value);
  let positionAmount = Number(formRef.amount.value);
  // console.log(firstDelay, stepDelay, positionAmount);

  for (let i = 1; i <= positionAmount; i += 1) {
    // console.log(position, stepDelay);
    // stepDelay += stepDelay;
    const totaldelay = firstDelay + i * stepDelay;
    // console.log(positionAmount, stepDelay);
    createPromise(i, totaldelay);
    // createPromise(i, stepDelay);
  }
}

function createPromise(position, delay) {
  // console.log(positionAmount, stepDelay);
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve('Succsess');
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject('Error');
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  });
}

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const shouldResolve = Math.random() > 0.3;

//       if (shouldResolve) {
//         // Fulfill
//       } else {
//         // Reject
//       }
//     }, 2000);
//   });
// };
