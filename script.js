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

// logic to ensure that operational button is not pressed twice :
let plusBtn = document.getElementById('addition_button').innerText.toString();
let minusBtn = document.getElementById('minus_button').innerText.toString();
let divisionBtn = document.getElementById('division_button').innerText.toString();
let multiplicationBtn = document.getElementById('multiplication_button').innerText.toString();

 
function prevDuplicationOfOppBtn(operationBtn){
    // get the current display value
    let currentVal = userClickedButtonDisplayArea.innerText
    
    // get the last character
    let lastNumber = currentVal.slice(-1);
    console.log(lastNumber)
    if(lastNumber != plusBtn && 
        lastNumber != minusBtn &&
        lastNumber != divisionBtn &&
        lastNumber != multiplicationBtn){
        userClickedButtonDisplayArea.innerText += operationBtn
    }
}

// Add event listener to operation buttons
let multiplyTag = document.getElementById('multiplication_button');
let plusTag = document.getElementById('addition_button');
let minusTag = document.getElementById('minus_button');
let divisionTag = document.getElementById('division_button')

// add Event Listener
multiplyTag.addEventListener('click', ()=>prevDuplicationOfOppBtn(multiplicationBtn));
plusTag.addEventListener('click', ()=>prevDuplicationOfOppBtn(plusBtn));
minusTag.addEventListener('click', ()=>prevDuplicationOfOppBtn(minusBtn));
divisionTag.addEventListener('click', ()=>prevDuplicationOfOppBtn(divisionBtn))





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
});

// method to perform mathematical operation using equals to
let equalButton = document.getElementById('equals_button');
// add an event listener to equalButton
equalButton.addEventListener('click', (e)=>{
e.preventDefault();
// check the last character of the user input
let userInput = userClickedButtonDisplayArea.innerText.slice('');
let userLastCharacter = userInput.slice(-1);
let calculatedInput;
if(userLastCharacter == plusBtn || 
    userLastCharacter == minusBtn ||
    userLastCharacter == divisionBtn || 
    userLastCharacter == multiplicationBtn){
    let characterToCalculate = userInput.slice(0, -1);
    console.log(characterToCalculate)
    calculatedInput = eval(characterToCalculate);
    console.log(calculatedInput) ;
    document.getElementById('answer_div').innerText = calculatedInput;

}else{
    calculatedInput = eval(userInput);
    console.log(calculatedInput);
    document.getElementById('answer_div').innerText = calculatedInput;
}

})
