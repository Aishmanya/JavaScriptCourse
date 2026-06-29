const random = parseInt((Math.random() * 100 )+1)
// console.log(random)

const userInput = document.querySelector('#guessField')  //.value
const submit = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
const Remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultbox = document.querySelector('.resultParas')

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
}

function displayGuess(userGuess){
    // to display
    
}

function displayMsg(msg){
    // 
}

function endGame(){
    // 
}

function newGame(){
    // 
}



