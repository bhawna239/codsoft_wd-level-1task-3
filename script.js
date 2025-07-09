let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
    setTimeout(() => {
      currentInput = "";
      updateDisplay();
    }, 1000);
  }
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}
let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
    setTimeout(() => {
      currentInput = "";
      updateDisplay();
    }, 1000);
  }
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}
