const button = document.getElementById('calculator');
var currentNum = document.getElementById('currentNum');
var pastInput= document.getElementById('pastInput');
var firstNum = 0;
var action;

button.addEventListener('click', (event) => {        //one click event for the entire calculator
    switch (event.target.className){                 //Get the class name of the button that was click
        case 'number':                               //All numbers have class number
            let number = event.target;               //Set number to the button pressed
            if (currentNum.innerHTML == 0){          //If already has a zero do not add number
            currentNum.innerHTML = number.value;
            } else {                                 //Add the number to the current number presented
            currentNum.innerHTML = currentNum.innerHTML + number.value;
            }    
            break;
       case 'action':                               //Actions are the things you can do to numbers
            action = event.target.value;            //Get the action value 
            firstNum = currentNum.innerHTML;        //Save the first number for later calculation
            pastInput.innerHTML = currentNum.innerHTML + ' ' + action;   //Set past input
            currentNum.innerHTML = '';     //Reset the current number
            break;
        case 'equal':
            switch (action){
                case '+':
                    currentNum.innerHTML = parseFloat(currentNum.innerHTML) + parseFloat(firstNum);  //Force the HTML to become a number
                    pastInput.innerHTML = '';           //Reset the past number to zero
                    break;
                case '-':
                    currentNum.innerHTML = parseFloat(firstNum) - parseFloat(currentNum.innerHTML);
                    pastInput.innerHTML = '';
                    break;
                case '*':
                    currentNum.innerHTML = parseFloat(currentNum.innerHTML) * parseFloat(firstNum);
                    pastInput.innerHTML = '';
                    break;
                case '/':
                    currentNum.innerHTML = parseFloat(firstNum) / parseFloat(currentNum.innerHTML);
                    pastInput.innerHTML = '';
                    break;
            }
            break;
        case 'clear':
            currentNum.innerHTML = 0;    //Sets every thing to zero
            pastInput.innerHTML = '';
            firstNum = 0;
            action = 0;
            break;
    }

});

