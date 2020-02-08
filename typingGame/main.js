function startTypingGame() {

// Globals

// Available Levels
const levels = {
 one: 15
};

// To change level
const currentLevel = levels.one;

let time = currentLevel;
let score = 0;
let isPlaying;

console.log("GOTHERE1");

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
console.log("GOTHERE2");
console.log(seconds);

const words = [
  'hat',
  'river',
  'lucky',
  'type',
  'dog',
  'right',
  'hack',
  'cat',
  'joke',
  'hello',
  'word',
  'hero',
  'health',
  'school',
  'love',
  'echo',
  'siblings',
  'nature',
  'fun',
  'miss',
  'laughter',
  'magic',
  'master',
  'space',
  'tree',
  'sleep',
  'run',
  'bed',
  'home',
  'food',
  'mom',
  'dad'
];

init();
// Initialize Game
function init() {
  console.log("INIT");
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
}
// startTypingGame();