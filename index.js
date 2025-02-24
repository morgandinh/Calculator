function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result = new Function('return ' + expression)(); // Safely evaluates the expression
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = ''; // Clears the display
}
