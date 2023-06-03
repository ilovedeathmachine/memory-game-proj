const cards = document.querySelectorAll('.card');

const begin = document.querySelector('.start');

const timer = document.querySelector('.timer')

let first;
let second;
let matchCounter = 0;


// const state = {
//   gameStarted: false,
//   flippedCards: 0,
//   totalFlips: 0,
//   totalTime: 0,
//   loop: null
// }



cards.forEach(function(card) {
   let randomNum = Math.floor(Math.random() * 12);
   card.style.order = randomNum;

   card.addEventListener('click', function() {
    if (!first && !second) {
      first = card;
      card.classList.add('show');
    } else if (first && !second) {
      second = card;
      card.classList.add('show');
      if (first.innerHTML === second.innerHTML) {
        first.style.pointerEvents = 'none';
        second.style.pointerEvents = 'none';
        first = null;
        second = null;
        matchCounter++;
        if (matchCounter >= 6) setTimeout(() => alert('Amazing, You found all of the matches! Refresh to try again.'), 2000);
      } else {
          first.classList.add('hide');
          second.classList.add('hide');
          setTimeout(() => {
            first.classList.remove('show');
            second.classList.remove('show');
            first.classList.remove('hide');
            second.classList.remove('hide');
            first = null;
            second = null;
        }, 2000);
      }
    }
  })
});

// const startGame = () => {
//   state.gameStarted = true
//   selectors.start.classList.add('disabled')
  
//   state.loop = setInterval(() => {
//     state.totalTime++
    
//     selectors.moves.innerText = `${state.totalFlips} moves`
//     selectors.timer.innerText = `Time: ${state.totalTime} sec`
//   }, 1000)
// }
