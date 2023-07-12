function checkSign(numOne, numTwo, numThree) {
  let arr = [numOne, numTwo, numThree];
  let count = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element < 0) {
      count++;
    }
  }

  let result = count % 2 == 1 && count % 3 == 1 ? "Negative" : "Positive";
  console.log(result);
}

checkSign(-5, -12, -15);
