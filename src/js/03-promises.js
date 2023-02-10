import { Notify } from 'notiflix/build/notiflix-notify-aio';
const inputDelayEl = document.querySelector('input[name="delay"]');
const inputStepEl = document.querySelector('input[name="step"]');
const inputAmountEl = document.querySelector('input[name="amount"]');
const btnEl = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

const onResolve = ({ position, delay }) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onRejected = ({ position, delay }) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

function makePromise(e) {
  e.preventDefault();
  let deley = Number(inputDelayEl.value);
  let step = Number(inputStepEl.value);
  let amount = Number(inputAmountEl.value);

  if (!amount) {
    amount = 1;
  }

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, deley + step * i)
      .then(onResolve)
      .catch(onRejected);
  }
}
btnEl.addEventListener('click', makePromise);
