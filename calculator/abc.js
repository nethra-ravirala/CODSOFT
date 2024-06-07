let calcDisplay = document.getElementById('calcDisplay');
let currentOperand = '0';
let currentOperator = null;
let previousOperand = '';

function handleNumber(number) {
    if (currentOperand === '0') {
        currentOperand = number.toString();
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

function handleOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        performCalculation();
    }
    currentOperator = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function handleEqual() {
    performCalculation();
    updateDisplay();
}

function performCalculation() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;    
        default:
            return;
    }

    currentOperand = result.toString();
    currentOperator = null;
    previousOperand = '';
}

function handleClear() {
    currentOperand = '0';
    currentOperator = null;
    previousOperand = '';
    updateDisplay();
}

function handleClearEntry() {
    currentOperand = '0';
    updateDisplay();
}

function handleBackspace() {
    currentOperand = currentOperand.slice(0, -1);
    if (currentOperand === '') {
        currentOperand = '0';
    }
    updateDisplay();
}

function handleDecimal() {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
    }
    updateDisplay();
}

function handleSquareRoot() {
    const number = parseFloat(currentOperand)
    if (isNaN(number)) return;
    currentOperand = Math.sqrt(number).toFixed(10).toString();
    updateDisplay();
}

function handlesquare() {
    const number = parseFloat(currentOperand);
    if (isNaN(number)) return;
    currentOperand = Math.pow(number, 2);
    updateDisplay();
}

function handlecube() {
    const number = parseFloat(currentOperand);
    if (isNaN(number)) return;
    currentOperand = Math.pow(number, 3);
    updateDisplay();
}    


function updateDisplay() {
    calcDisplay.innerText = currentOperand;
}
