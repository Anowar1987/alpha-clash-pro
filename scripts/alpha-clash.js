// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     const playgroundSection = document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection);
// }

function handleKeyboardBtuuonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expetedAlphabet = currentAlphabet.toLowerCase()
    // console.log(playerPressed, expetedAlphabet);

    // check right or wrong key pressed
    if(playerPressed === expetedAlphabet){
        console.log('You got a point');
        console.log('you have pressed correctly', expetedAlphabet);
        removeBackgroundColorById(expetedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed a point. You lost a life');
    }
}
document.addEventListener('keyup', handleKeyboardBtuuonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame();
}