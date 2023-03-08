const containersNumbers = document.getElementsByClassName('numbers');
const containersOperators = document.getElementsByClassName('operators');
const containersOptions = document.getElementsByClassName('options');
const containerResult = document.getElementById('result');

const operators = ['+', '-', 'x', '÷'];

// Event listener for numbers
for (const number of containersNumbers[0].childNodes) {
    number.addEventListener('click', function () {
        containerResult.value += number.textContent;
    });
}

// Event listener for options
for (const option of containersOptions[0].childNodes) {
    option.addEventListener('click', function () {
        if (option.textContent == 'AC') {
            containerResult.value = "";
        }
        else if (option.textContent == 'backspace') {
            containerResult.value = containerResult.value.slice(0, -1);
        } else if (option.textContent == "%") {
            containerResult.value = containerResult.value / 100;
        }
    });
}


// Event listener for operators
for (const operator of containersOperators[0].childNodes) {
    operator.addEventListener('click', function () {
        // Add the operator
        addOperator(operator.textContent)

    });
}

// Event listener for keyboard
document.addEventListener('keydown', function (event) {
    let key_pressed = event.key;
    console.log(key_pressed);
    switch (key_pressed) {
        case '1': containerResult.value += '1';break;
        case '2': containerResult.value += '2';break;
        case '3': containerResult.value += '3';break;
        case '4': containerResult.value += '4';break;
        case '5': containerResult.value += '5';break;
        case '6': containerResult.value += '6';break;
        case '7': containerResult.value += '7';break;
        case '8': containerResult.value += '8';break;
        case '9': containerResult.value += '9';break;
        case '0': containerResult.value += '0';break;
        case '.': containerResult.value += '.';break;
        case '+': addOperator('+');break;
        case '-': addOperator('-');break;
        case '*': addOperator('x');break;
        case '/': addOperator('÷');break;
        case 'Enter': addOperator('=');break;
        case 'a': containerResult.value = "";break;
        case 'Backspace': containerResult.value = containerResult.value.slice(0, -1);break;
        default: break;
    }
});


// Calculate the result of the operation
function calculate() {
    if (containerResult.value !== "" 
    && !operators.includes(containerResult.value.slice(-1))){
        containerResult.value = containerResult.value
        .replace(/x/g, '*') // Replace x with *
        .replace(/÷/g, '/') // Replace ÷ with /
        containerResult.value = eval(containerResult.value)
    }
}

function addOperator(operator){
    // if operator is included in the operators array
    if (operators.includes(operator)) {
        containerResult.value += operator;
    } else if (operator == '=') { // else calculate the result
        calculate();
    }

    // Replace the last operator with the new one if the last character is an operator
    if (operators.includes(containerResult.value.slice(-2, -1))
    && operators.includes(containerResult.value.slice(-1))) {
    containerResult.value = containerResult.value.slice(0, -2) + operator;
}
}