

let random = parseInt((Math.random() * 100 )+1)
// console.log(random)

const userInput = document.querySelector('#guessField')  //.value
const submit = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
const Remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultbox = document.querySelector('.resultParas')

const p = document.createElement('p')

let guessNo = 1
let playGame = true

let prevArr = []

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const userGuess = parseInt(userInput.value)
        console.log(userGuess);
        
        // e.validateGuess(userGuess)   WRONG as event me validate function nhi chalana , userGuess me chalana
        validateGuess(userGuess)
    })
}

function validateGuess(userGuess){
    //to validate the user guessed no
    if (isNaN(userGuess)){
        alert('Plz enter a valid no')
    }
    else if (userGuess < 1 ){
        alert('Plz enter a valid no >=1')
    }
    else if (userGuess > 100 ){
        alert('Plz enter a valid no <=100')
    }
    else{
        prevArr.push(userGuess)
        if (guessNo === 11){
            displayGuess(userGuess)
            displayMsg(`Attempts are Over! The random no. was ${random}`)
            endGame()
        }
        else{
            displayGuess(userGuess)
            checkGuess(userGuess)
        }
    }
}

function checkGuess(userGuess){
    //to check if user guessed the right no.
    if (userGuess === random) {
        displayGuess(userGuess)
        displayMsg('Yay! You WON !!!!')
        endGame()
    }
    else if (userGuess > random) {displayMsg('your no. is too high')}

    else if (userGuess < random) {displayMsg('your no. is too low')}

}

function displayGuess(userGuess){
    // to update userGuess no like empty that to take next guess then update prevArr remaining attempts etc

    // userInput.innerHTML=''               wrong
    userInput.value='';
    guessNo++;
    Remaining.innerHTML=`${11 - guessNo}`;
    prevGuesses.innerHTML += `${userGuess} ,`;
}

function displayMsg(msg){
    // to display any msg
    lowOrHi.innerHTML=`<h2> ${msg} </h2>`
}

function endGame(){
    // to clear the values and disable the input value of userInput 
    userInput.value='';
    userInput.setAttribute('disabled','') ;//always goes in pair so main hame disable karna tha toh toh aisehe as a pair empty quote dal diye
    p.classList.add('button');
    p.innerHTML=`<h2 id='newgame'>Start New Game</h2>`;
    resultbox.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
    // resets all vars and start again
    const newGamebtn= document.querySelector('#newgame');
    newGamebtn.addEventListener('click', function(e){
        random = parseInt((Math.random() * 100 )+1);
        prevArr=[];
        guessNo=1;
        prevGuesses.innerHTML='';
        Remaining.innerHTML=`${11 - guessNo}`;
        userInput.removeAttribute('disabled');
        resultbox.removeChild(p);

        playGame=true;
    });

}



