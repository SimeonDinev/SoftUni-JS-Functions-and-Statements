function solve(num) {
  let sum = 0;

  for (let index = 1; index < num; index++) {
    if (num % index === 0) {
      sum += index;
    }
  }

  if (sum === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
solve(6);
solve(28);
solve(1236498);
