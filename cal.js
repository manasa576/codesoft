let displayValue = '';
    let firstOperand = null;
    let operator = null;

    function appendToDisplay(value) {
      displayValue += value;
      document.getElementById('display').value = displayValue;
    }

    function clearDisplay() {
      displayValue = '';
      firstOperand = null;
      operator = null;
      document.getElementById('display').value = displayValue;
    }

    function setOperator(op) {
        if (firstOperand === null) {
            firstOperand = parseFloat(displayValue);
        }
        operator = op;
        displayValue = '';
    }

    function calculateResult() {
      if (operator === null || firstOperand === null) return;

        let secondOperand = parseFloat(displayValue);
        let result;
        if (operator === '+') {
            result = firstOperand + secondOperand;
        } else if (operator === '-') {
            result = firstOperand - secondOperand;
        } else if (operator === '*') {
            result = firstOperand * secondOperand;
        } else if (operator === '/') {
            if (secondOperand === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
        }

        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        firstOperand = result;
        operator = null;
    }
 
