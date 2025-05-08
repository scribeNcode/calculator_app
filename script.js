// let numberZero = document.querySelector('#numZero_button');
// let numberOne = document.querySelector('#numOne_button');
// let numberTwo = document.querySelector('#numTwo_button');
// let numberThree = document.querySelector('#numThree_button');
// let numberFour = document.querySelector('#numFour_button');
// let numberFive = document.querySelector('#numFive_button');
// let numberSix = document.querySelector('#numSix_button');
// let numberSeven = document.querySelector('#numSeven_button');
// let numberEight = document.querySelector('#numEight_button');
// let numberNine = document.querySelector('#numNine_button');

// console.log(numberOne);
// console.log(numberTwo);
// console.log(numberThree);
// console.log(numberFour);
// console.log(numberFive);
// console.log(numberSix);
// console.log(numberSeven);
// console.log(numberEight);
// console.log(numberNine);
// console.log(numberZero);

// get all buttons
let allButtons = document.querySelectorAll('.btn-displayable');
// get the display tag
let userClickedButtonDisplayArea = document.getElementById('display');

// Method to add event listener to displayable buttons
allButtons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(button.innerText);
        userClickedButtonDisplayArea.innerText += button.innerText
    })
});

//add method to clear all texts in the input field
//get the clear button
let clearButton = document.getElementById('clear_button');
clearButton.addEventListener('click',()=>{
    // clear the userInput displayArea whenever the clear button is cliked
    userClickedButtonDisplayArea.innerText = ''
})
