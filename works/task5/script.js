function calculate(operator) {
  let x = parseInt(document.getElementById("num1").value);
  let y = parseInt(document.getElementById("num2").value);
  switch (operator) {
    case "+":
      document.getElementById("res").value = x + y;
      break;
    case "-":
      document.getElementById("res").value = x - y;
      break;
    case "*":
      document.getElementById("res").value = x * y;
      break;
    case "/":
      document.getElementById("res").value = x / y;
      break;
  }
}
