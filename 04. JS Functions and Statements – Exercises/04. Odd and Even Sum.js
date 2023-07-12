function solve(numbers) {
  let numberstToString = numbers.toString();

  console.log(sumNumbers(numberstToString));
}

function sumNumbers(stringNumbers) {
  let oddSum = 0;
  let evenSum = 0;

  for (let index = 0; index < stringNumbers.length; index++) {
    if (stringNumbers[index] % 2 == 1) {
      oddSum += Number(stringNumbers[index]);
    } else {
      evenSum += Number(stringNumbers[index]);
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

solve(1000435);
solve(3495892137259234);
