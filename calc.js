const num1 = parseFloat(prompt("ENTER THE FIRST NUMBER:"));
const operator = prompt("ENTER AN OPERATOR(+ , - , * , / , %");
const num2 = parseFloat(prompt("ENTER THE SECOND NUMBER:"));

let result;
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
    if (num2 != 0) {
      result = num1 / num2;
    } else {
      alert("You cannot divide by 0");
    }
    break;

  case "%":
    result = num1 % num2;
    break;

  default:
    alert("Invalid Operator.Please use +, -, *, / or %");
}
if (result !== undefined) {
  alert(`Result: ${result}`);
}
