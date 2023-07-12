const sum = (num1, num2) => num1 + num2;

function solve(num1, num2, num3) {
  const sumResult = sum(num1, num2);
  console.log(sumResult - num3);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);
