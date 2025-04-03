function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Div by 0!";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

let currentInput = "0";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let isResultDisplayed = false;

const display = document.getElementById("display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const dotButton = document.querySelector(".dot");

// Update display with the current input
function updateDisplay() {
    display.value = currentInput;
}

// Handle digit button press
digits.forEach(button => {
    button.addEventListener("click", () => {
        if (isResultDisplayed) {
            currentInput = button.textContent;
            isResultDisplayed = false;
        } else {
            currentInput = (currentInput === "0") ? button.textContent : currentInput + button.textContent;
        }
        updateDisplay();
    });
});

// Handle operator button press
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
            currentOperator = button.textContent;
            currentInput = "0";
        } else {
            secondNumber = parseFloat(currentInput);
            firstNumber = operate(currentOperator, firstNumber, secondNumber);
            currentOperator = button.textContent;
            currentInput = "0";
            updateDisplay();
        }
    });
});

// Handle equals button press
equalsButton.addEventListener("click", () => {
    if (firstNumber !== null && currentOperator !== null) {
        secondNumber = parseFloat(currentInput);
        currentInput = operate(currentOperator, firstNumber, secondNumber).toString();
        firstNumber = null;
        currentOperator = null;
        isResultDisplayed = true;
        updateDisplay();
    }
});

// Handle clear button press
clearButton.addEventListener("click", () => {
    currentInput = "0";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    isResultDisplayed = false;
    updateDisplay();
});

// Handle dot button press for decimals
dotButton.addEventListener("click", () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
});

// Utility function to handle division by zero
function divide(a, b) {
    if (b === 0) {
        return "Error: Div by 0!";
    }
    return a / b;
}
