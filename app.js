const words = ['perception'] //, 'straighten', 'diplomatic', 'accessible', 'monstrous', 'appearance', 'domination', 'presidential', 'frequency', 'pneumonia'];
const dynamicText = document.getElementById('dynamic-text');
let originalWord = '';
const input = document.getElementById('input');
const result = document.getElementById('result')
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the form from being submitted
  let inputValue = input.value;
  if (inputValue.toLowerCase() === originalWord) {
    input.value = '';
    let index = words.indexOf(originalWord);
    words.splice(index, 1);
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
  const randomWord = Math.floor(Math.random() * array.length);
  const word = array[randomWord]
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