function checkingForPalindrome(intArray) {
  for (let index = 0; index < intArray.length; index++) {
    let currentNumber = intArray[index].toString();
    let currentNumberReversed = currentNumber
      .split("")
      .reverse()
      .join("")
      .toString();

    console.log(check(currentNumber, currentNumberReversed));
  }
}

const check = (x, y) => (x === y ? true : false);

//checkingForPalindrome([123, 323, 421, 121]);
checkingForPalindrome([32, 2, 232, 1010]);
