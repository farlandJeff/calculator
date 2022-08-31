let dNum = '0';
let num1 = null;
let num2 = null;
let operator1 = null;
let operator2 = null;
let tempBtn = null;
const numBtns = document.querySelectorAll('button');

function displayNumber() {
    const display = document.querySelector('.display');
    display.textContent = '' + dNum;
}

// Inital number display (0)
displayNumber();

// Each button, depending on class, invokes a different function.
numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('num')) {
            numInput(btn.value);
            if (tempBtn != null) {
                tempBtn.classList.remove('colorclick');
                tempBtn = null;
            }
            displayNumber();
        }
        if (btn.classList.contains('operator')) {
            tempBtn = btn;
            opInput(btn.textContent);
            tempBtn.classList.add('colorclick');
        }
        if (btn.classList.contains('equals')) {
            equalInput();
            displayNumber();
        }
        if (btn.classList.contains('clear')) {
            clearInput();
            displayNumber();
        }
        if (btn.classList.contains('percent')) {
            dNum = percentInput(dNum);
            displayNumber();
        }
        if (btn.classList.contains('sign')) {
            dNum = -dNum;
            displayNumber();
        }
        if (btn.classList.contains('decimal')) {
            if (!dNum.includes('.')) {
                dNum = dNum + '.';
            }
            if (num1 != null && num2 != null) {
                num1 = null;
                num2 = null;
                operator1 = null;
                dNum = '0';
                dNum = dNum + '.';
            }
            displayNumber();
        }
    });
});

function numInput(num) {
    if (num1 != null && num2 != null) { // Resets if neither are null
        num1 = null;
        num2 = null;
        dNum = '0'
    }
    if (dNum == '0') {
        dNum = num;
    } else {
        dNum = dNum + num;
    }
}

// Operation Inputs
function opInput(op) {
    
    if (operator1 == null) {
        operator1 = op;
        num1 = +dNum;
        dNum = '0';
    } else if (operator1 != null && num2 == null) { // For multiple operations w/o equals
        operator2 = op; // Only used when the '=' isn't used
        num2 = +dNum;
        num1 = operate(num1, num2, operator1);
        operator1 = operator2;
        operator2 = null;
        num2 = null;
        num1 = parseFloat(num1.toFixed(10));
        dNum = num1;
        displayNumber();
        dNum = '0';
    } else {
        operator1 = op;
        num2 = null;
        dNum = '0';
    }
}

function equalInput() {
    if (num2 == null) num2 = +dNum;
    num1 = operate(num1, num2, operator1);
    num1 = parseFloat(num1.toFixed(10));
    dNum = '' + num1;
}

// Clears the entire app's data. 
function clearInput() {
    dNum = '0';
    num1 = null;
    num2 = null;
    operator1 = null;
    operator2 = null;
}

function percentInput(a) {
    return a / 100;
}

function add(a, b) {
    displayNumber();
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return 'noob';
    return a / b;
}

function operate(a, b, op) {
    if (op == '+') return add(a, b);
    if (op == '-') return subtract(a, b);
    if (op == '*') return multiply(a, b);
    if (op == '/') return divide(a, b);    
}

