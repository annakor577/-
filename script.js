let timerInterval;
let milliseconds = 30000;

function updateTimer() {
  const timerElement = document.getElementById('timer');
  const animationElement = document.getElementById('animation');
  const startButton = document.getElementById('start-button');

  if (milliseconds <= 0) {
    clearInterval(timerInterval);
    startButton.disabled = false;
    milliseconds = 0;
  } else {
    milliseconds--;
  }

  const seconds = (milliseconds / 1000).toFixed(3);
  timerElement.textContent = seconds;

  if (milliseconds <= 10000) {
    animationElement.classList.remove('hidden');
  } else {
    animationElement.classList.add('hidden');
  }
}

function startTimer() {
  milliseconds = 30000;
  document.getElementById('start-button').disabled = true;
  timerInterval = setInterval(updateTimer, 1);
}

document.getElementById('start-button').disabled = false;
