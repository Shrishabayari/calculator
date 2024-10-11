let display = document.querySelector('.display');
let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function appendOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.value = "";
}

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) {
      return;  
    }
    currentNumber += number;
    display.value = currentNumber;
  }

  function calculateSquareRoot() {
    if (currentNumber === "") {
      alert("Please enter a number first!");
      return;
    }
  
    let number = parseFloat(currentNumber);
    let result = Math.sqrt(number);
  
    if (number < 0) {
      alert("Square root is not defined for negative numbers.");
      return;
    }
  
    display.value = result;
    currentNumber = result.toString(); 
    operator = ""; 
  }
  
  function appendOperator(op) {
    if (op === '%') {
      currentNumber = parseFloat(currentNumber);
      previousNumber = currentNumber / 100; 
      operator = op;
    } else {
      previousNumber = currentNumber;
      currentNumber = "";
      operator = op;
    }
  }

  function toggleSign() {
    if (currentNumber === "") {
      currentNumber = "-";  
    } else {
      currentNumber = parseFloat(currentNumber) * -1;  
      currentNumber = currentNumber.toString();  
    }
    display.value = currentNumber;
  }
  
  function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
  }

function calculate() {
  let result = "";
  let a = parseFloat(previousNumber);
  let b = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        alert("Division by zero!");
        return;
      }
      result = a / b;
      break;

      
    case "%":
      if (previousNumber === 0) {
        alert("Cannot calculate percentage of zero!");
        return;
      }
      result = (b / previousNumber) * 100;  
  }

  display.value = result;
  currentNumber = result;
  previousNumber = "";
  operator = "";
}
