'use strict';

let hiddenguess = document.querySelector('.number');
let guessnum = Math.floor(Math.random() * 20 + 1);
let again=document.querySelector(".again");



const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let inputnum = Number(document.querySelector('.guess').value);
  console.log(inputnum);
  if (!hiddenguess) {
    displayMessage('⛔️ No number!');
  } else if (inputnum == guessnum) {
    displayMessage(' 🎉Correct Number');
    document.querySelector("body").style.backgroundColor='green';
  } 
  else if(inputnum!=guessnum){
    if (score>1) {
    displayMessage(inputnum < guessnum ? 'Too High' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
      displayMessage("You Lost The Game 💣")
      document.querySelector('.score').textContent = 0;
  }}
});
 
again.addEventListener("click",function () {
    window.location.reload(false);
})