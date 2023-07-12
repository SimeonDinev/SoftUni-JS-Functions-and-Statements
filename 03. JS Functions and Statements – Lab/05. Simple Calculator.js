const calculator = {
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
};

function calculate(num1, num2, operator) {
  return calculator[operator](num1, num2);
}

const result = calculate(5, 5, "add");
console.log(result);
