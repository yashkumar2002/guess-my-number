'use strict';

// document.querySelector('.message').textContent='correct number';
// document.querySelector('.score').textContent='15';
// document.querySelector('.highscore').textContent='5';
// document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value);
let secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent='?';
let highscore = 0;
//  document.querySelector('.highscore').textcontent = highscore;
document.addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent='😤No number😤';
    }else if(guess === secretnumber){
       
        document.querySelector('.message').textContent='🎉correct number🎉';
        document.querySelector('.number').textContent='you win';
        document.querySelector('body').style.backgroundColor='#60b347';
          if(score>highscore){
            highscore=score;
             document.querySelector('.highscore').textContent= highscore;

          }
    }
    else if(guess > secretnumber){
        if (score > 1) {
        document.querySelector('.message').textContent='📈Too high📈';
        score--;
        document.querySelector('.score').textContent= score;
    } else{
        document.querySelector('.message').textContent='you lost the game';
        document.querySelector('.score').textContent= 0;
    }}
     else if(guess < secretnumber){
        if (score > 1) {
        document.querySelector('.message').textContent='📉Too low📉';
        score--;
        document.querySelector('.score').textContent= score;
    } else{
        document.querySelector('.message').textContent='you won the game';
        document.querySelector('.score').textContent= 0;
    }}

    
    }
})
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent='😤No number😤';
    }else if(guess === secretnumber){
       
        document.querySelector('.message').textContent='🎉correct number🎉';
        document.querySelector('.number').textContent='you win';
        document.querySelector('body').style.backgroundColor='#60b347';
          if(score>highscore){
            highscore=score;
             document.querySelector('.highscore').textContent= highscore;

          }
    }
    else if(guess > secretnumber){
        if (score > 1) {
        document.querySelector('.message').textContent='📈Too high📈';
        score--;
        document.querySelector('.score').textContent= score;
    } else{
        document.querySelector('.message').textContent='you lost the game';
        document.querySelector('.score').textContent= 0;
    }}
     else if(guess < secretnumber){
        if (score > 1) {
        document.querySelector('.message').textContent='📉Too low📉';
        score--;
        document.querySelector('.score').textContent= score;
    } else{
        document.querySelector('.message').textContent='you won the game';
        document.querySelector('.score').textContent= 0;
    }}

    
 
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent= score=20;
     secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent='start guessing.....';
    let guess = Number(document.querySelector('.guess').value='');
    document.querySelector('body').style.backgroundColor= '#222';
    
 });

