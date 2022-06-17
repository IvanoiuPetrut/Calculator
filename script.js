const expressionText = document.querySelector(".display__expression");
const resultText = document.querySelector(".display__result");

class Calculator {
  constructor(firstNumber, secondNumber, operator, result) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operator = operator;
    this.result = result;
  }

  setFirstNumber(number) {
    this.firstNumber += number;
  }

  setSecondNumber(number) {
    this.secondNumber += number;
  }

  setOperator(operator) {
    if (this.firstNumber === "") {
      this.firstNumber = "0";
    }

    this.operator = operator;
  }

  setResult(result) {
    this.result = result;
  }

  setNumbers(number) {
    if (isNumber(number) || isDecimal(number)) {
      if (this.operator === "") {
        if (hasOneDecimal(this.firstNumber) || isNumber(number))
          this.setFirstNumber(number);
      } else {
        if (hasOneDecimal(this.secondNumber) || isNumber(number))
          this.setSecondNumber(number);
      }
    }
  }

  calculate() {
    if (this.operator === "+") {
      return parseFloat(this.firstNumber) + parseFloat(this.secondNumber);
    } else if (this.operator === "-") {
      return parseFloat(this.firstNumber) - parseFloat(this.secondNumber);
    } else if (this.operator === "*") {
      return parseFloat(this.firstNumber) * parseFloat(this.secondNumber);
    } else if (this.operator === "/") {
      return parseFloat(this.firstNumber) / parseFloat(this.secondNumber);
    } else if (this.operator === "%") {
      return parseFloat(this.firstNumber) % parseFloat(this.secondNumber);
    }
  }

  isInputSet() {
    return (
      this.firstNumber !== "" &&
      this.secondNumber !== "" &&
      this.operator !== ""
    );
  }

  isOperatorSet() {
    return this.operator !== "";
  }

  isResultSet() {
    return this.result !== "";
  }

  clearInput() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operator = "";
  }

  clearResult() {
    this.result = "";
  }
}

let expression = new Calculator("", "", "", "", "");

function isNumber(number) {
  return !isNaN(number);
}

function isDecimal(number) {
  return number === ".";
}

function hasOneDecimal(number) {
  if (number.includes(".")) return false;
  return true;
}

function isOperator(operator) {
  return (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/" ||
    operator === "%"
  );
}

function isEqual(button) {
  return button === "=";
}

function isClear(button) {
  return button === "C";
}

function changeExpressionText(text) {
  expressionText.innerHTML = `${text.firstNumber} ${text.operator} ${text.secondNumber} =`;
}

function changeResultText(text) {
  resultText.innerHTML = text.result;
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    expression.setNumbers(e.target.innerHTML);

    if (isOperator(e.target.innerHTML)) {
      expression.setOperator(e.target.innerHTML);
      if (expression.isInputSet()) {
        expression.setResult(expression.calculate());
        changeResultText(expression);
        expression.clearInput();
        expression.setFirstNumber(expression.result);
        expression.clearResult();
      }
    }

    if (isEqual(e.target.innerHTML))
      if (expression.isInputSet()) {
        expression.setResult(expression.calculate());
        changeResultText(expression);
        expression.clearInput();
        expression.setFirstNumber(expression.result);
        expression.clearResult();
      }

    if (isClear(e.target.innerHTML))
      expression.clearInput() && expression.clearResult();

    changeExpressionText(expression);
    console.log(expression);
  });
});
