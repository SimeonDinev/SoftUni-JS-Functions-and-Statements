const sumOfArray = (arr) => arr.reduce((a, b) => a + b);
const parseToNumber = (num) => Number(num);

function numberModificator(number) {
  let array = [];
  let sNumber = number.toString();

  for (let index = 0; index < sNumber.length; index++) {
    array.push(parsedNumber(sNumber[index]));
  }

  while (sumOfArray(array) / array.length < 5.0) {
    array.push(9);
  }

  console.log(array.join(""));
}

numberModificator(101);
numberModificator(5835);
