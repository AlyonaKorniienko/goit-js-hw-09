import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let firstDelay = Number(formRef.delay.value);
  let stepDelay = Number(formRef.step.value);
  let positionAmount = Number(formRef.amount.value);

  for (let i = 0; i < positionAmount; i += 1) {
    const totaldelay = firstDelay + i * stepDelay;
    createPromise(i, totaldelay);
  }
}

function createPromise(position, delay) {
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
