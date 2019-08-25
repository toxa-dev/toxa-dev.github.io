const input = document.querySelector(".input");
//const outputField = document.querySelector(".output");
const outputExpression = document.querySelector(".expression");
const outputResult = document.querySelector(".result");

let num1 = "";
let num2 = "";
let operator = null;
let result = null;

input.addEventListener("click", e => {
  const expr = e.target;

  if (expr.textContent == "AC") {
    num1 = "";
    num2 = "";
    operator = null;
    result = null;
    outputExpression.textContent = "";
    outputResult.textContent = "";
  }

  if (expr.classList[0] == "input-sign") {
    if (operator === null) {
      if (result !== null) {
        num1 = result;
      } else {
        // user is creating the number 1
        num1 += e.target.textContent;
        outputExpression.textContent = num1;
        console.log(num1);
      }
    } else {
      // user is creating the number 2
      num2 += e.target.textContent;
      outputExpression.textContent = num1 + operator + num2;
      console.log(num2);
    }
  } else if (expr.classList[0] == "input-operator") {
    operator = expr.textContent;
    if (result !== null) {
      num1 = result;
      outputExpression.textContent = num1 + operator;
    } else {
      outputExpression.textContent += operator;
    }
    console.log(operator);
  }

  if (expr.textContent == "=" && num2 != "") {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    outputExpression.textContent = num1 + operator + num2;
    outputResult.textContent = result;
    console.log(result);

    num1 = "";
    num2 = "";
    operator = null;
    //result = null;
  }
});
