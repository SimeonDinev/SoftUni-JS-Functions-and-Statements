function solve(num1, num2) {
  let num1Factoriel = 1;
  let num2Factoriel = 1;

  for (let index = 1; index <= num1; index++) {
    num1Factoriel *= index;
  }
  for (let index = 1; index <= num2; index++) {
    num2Factoriel *= index;
  }

  let result = num1Factoriel / num2Factoriel;
  console.log(result.toFixed(2));
}
solve(5, 2);
solve(6, 2);
