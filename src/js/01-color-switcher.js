const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;
startBtn.classList.add('button');
stopBtn.classList.add('button--disabled');
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startBtn.classList.replace('button', 'button--disabled');
  stopBtn.classList.replace('button--disabled', 'button');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  stopBtn.classList.replace('button', 'button--disabled');
  startBtn.classList.replace('button--disabled', 'button');
  body.style.backgroundColor = null;
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
