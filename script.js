const calculatorText = document.querySelector(".display__text");

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
        if (checkDecimal(this.firstNumber) || isNumber(number))
          this.setFirstNumber(number);
      } else {
        if (checkDecimal(this.secondNumber) || isNumber(number))
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

  isResultSet() {
    return this.result !== "";
  }

  // check if input is set
  isInputSet() {
    return (
      this.firstNumber !== "" &&
      this.secondNumber !== "" &&
      this.operator !== ""
    );
  }

  clear() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operator = "";
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

function checkDecimal(number) {
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

let changeText = function (text) {
  if (expression.isResultSet()) {
    console.log(text.result);
    calculatorText.innerHTML = `${text.result}`;
    expression.clear();
  } else {
    calculatorText.innerHTML = `${text.firstNumber} ${text.operator} ${text.secondNumber}`;
  }
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    expression.setNumbers(e.target.innerHTML);

    if (isOperator(e.target.innerHTML))
      expression.setOperator(e.target.innerHTML);

    if (isEqual(e.target.innerHTML))
      expression.setResult(expression.calculate());

    if (isClear(e.target.innerHTML)) expression.clear();

    changeText(expression);
  });
});
