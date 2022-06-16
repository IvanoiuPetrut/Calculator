const calculatorText = document.querySelector(".display__text");
let text = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

// add event on click for every button
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isNumber(e.target.innerHTML)) {
      setNumber(e.target.innerHTML);
    }

    if (isOperator(e.target.innerHTML)) {
      setOperator(e.target.innerHTML);
    }

    addToText(e.target.innerHTML);
    changeText(text);
  });
});

// check if the button is a number
function isNumber(number) {
  return !isNaN(number);
}

// check if the button is an operator
function isOperator(operator) {
  return (
    operator === "+" || operator === "-" || operator === "*" || operator === "/"
  );
}

function setOperator(op) {
  operator = op;

  console.log(operator);
}

let setNumber = function (number) {
  if (operator === "") {
    firstNumber += number;
  } else {
    secondNumber += number;
  }

  console.log(firstNumber, secondNumber);
};

function changeText(text) {
  calculatorText.innerHTML = text;
}

function addToText(number) {
  text += number;
}
