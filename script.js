let display = document.getElementById('display');
let expression = '';

function appendCharacter(char) {
    if (expression === '0' && char === '0') {
        return;
    }
    expression += char;
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        display.innerText = expression;
    } catch (error) {
        display.innerText = 'Error';
        expression = '';
    }
}