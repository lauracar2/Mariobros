const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const playButton = document.querySelector('.play-button');
const restartButton = document.querySelector('.restart-button');
let loop;

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const startGame = () => {
  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 88) {
      pipe.style.animation = 'none';
      pipe.style.setProperty('left', `${pipePosition}px`);

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = 'game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';
      clearInterval(loop);
    }
  }, 10);
};

const resetPipe = () => {
  pipe.style.animation = 'pipe-animation 1.5s infinite linear';
  pipe.style.setProperty('left', '400px');
};

const resetGame = () => {
  clearInterval(loop);
  mario.src = 'mario.gif';
  mario.style.width = '150px';
  mario.style.bottom = '0';
  resetPipe();
};

playButton.addEventListener('click', () => {
  startGame();
});

restartButton.addEventListener('click', () => {
  resetGame();
  setTimeout(() => {
    startGame();
    location.reload(); // Atualiza a página
  }, 500);
});

document.addEventListener('keydown', jump);
