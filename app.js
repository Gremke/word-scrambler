const words = {
  1: ['quantity', 'majority', 'convince', 'accessible', 'monstrous', 'appearance', 'domination', 'presidential', 'frequency', 'pneumonia'],
  2: ['qualification', 'strikebreaker', 'communication', 'concentration', 'investigation', 'consideration', 'consciousness', 'demonstration', 'entertainment', 'understanding'],
  3: ['discrimination', 'recommendation', 'identification', 'infrastructure', 'administration', 'rehabilitation', 'responsibility', 'superintendent', 'characteristic', 'correspondence'],
};

const dynamicText = document.getElementById('dynamic-text');
let originalWord = '';
const input = document.getElementById('input');
const level = document.getElementById('level');
let lvl = level.value;
const result = document.getElementById('result');
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the form from being submitted
  let inputValue = input.value;
  if (inputValue.toLowerCase() === originalWord) {
    input.value = '';
    let index = words[lvl].indexOf(originalWord);
    words[lvl].splice(index, 1);
    randomizeLetters();
    result.textContent = 'Correct!';
    console.log(words);
  } else {
    result.textContent = 'Wrong!';
    input.value = '';
  }
});

const getNewWord = document.getElementById('new-word');
getNewWord.addEventListener('click', function(){randomizeLetters()});

function getRandomWord(array) {
  console.log(lvl);
  console.log(Object.values(array));
  
  const randomWord = Math.floor(Math.random() * array[lvl].length);
  console.log(array[lvl][randomWord]);
  const word = array[lvl][randomWord];
  return word;
};

function randomizeLetters() {
  if (words.length === 0) {
    // Handle the case where all words have been guessed
    const newDiv = document.createElement('div');
    const complete = document.createTextNode('All of the words have been guessed!');
    newDiv.appendChild(complete);
    const body = document.querySelector('body');
    body.appendChild(newDiv);
    dynamicText.textContent = '';
    return;
  };

  originalWord = getRandomWord(words);
  let letters = originalWord.split('');
  letters.sort(function(){return 0.5 - Math.random()});
  dynamicText.textContent = letters.join('');
  result.textContent = '';
};

randomizeLetters();