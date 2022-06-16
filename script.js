const calculatorText = document.querySelector(".display__text");
let text = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

let changeText = function (text) {
  calculatorText.innerHTML = `${text.firstNumber} ${text.operator} ${text.secondNumber}`;
};
// add event on click for every button
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isNumber(e.target.innerHTML)) {
      expression.setNumber(e.target.innerHTML);
    }

    if (isOperator(e.target.innerHTML)) {
      expression.setOperator(e.target.innerHTML);
    }

    if (isEqual(e.target.innerHTML)) {
      console.log(expression.calculate());
      expression.setResult(expression.calculate());
      changeText = function (text) {
        calculatorText.innerHTML = `${text.result}`;
      };
      expression.clear();
    }

    if (isClear(e.target.innerHTML)) {
      expression.clear();
    }

    changeText(expression);
    console.log(expression);
    changeText = function (text) {
      calculatorText.innerHTML = `${text.firstNumber} ${text.operator} ${text.secondNumber}`;
    };
  });
});

// check if the button is =

function isNumber(number) {
  return !isNaN(number);
}

function isOperator(operator) {
  return (
    operator === "+" || operator === "-" || operator === "*" || operator === "/"
  );
}

function isEqual(button) {
  return button === "=";
}

function isClear(button) {
  return button === "C";
}

class Calculator {
  constructor(firstNumber, secondNumber, operator, result) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operator = operator;
    this.result = result;
  }

  setNumber(number) {
    if (this.operator === "") {
      this.firstNumber += number;
    } else {
      this.secondNumber += number;
    }
  }

  setOperator(operator) {
    if (this.firstNumber === "") {
      this.firstNumber = "0";
    }

    this.operator = operator;
  }

  clear() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operator = "";
  }

  // set result to the result of the calculation
  setResult(result) {
    this.result = result;
  }

  calculate() {
    if (this.operator === "+") {
      return parseInt(this.firstNumber) + parseInt(this.secondNumber);
    } else if (this.operator === "-") {
      return parseInt(this.firstNumber) - parseInt(this.secondNumber);
    } else if (this.operator === "*") {
      return parseInt(this.firstNumber) * parseInt(this.secondNumber);
    } else if (this.operator === "/") {
      return parseInt(this.firstNumber) / parseInt(this.secondNumber);
    }
  }
}

let expression = new Calculator("", "", "", "");
