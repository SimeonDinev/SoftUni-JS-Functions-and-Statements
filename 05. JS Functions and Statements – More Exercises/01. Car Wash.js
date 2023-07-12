function solve(stringArr) {
  let result = 0;
  for (let index = 0; index < stringArr.length; index++) {
    const element = stringArr[index];

    if (element === "soap") {
      result += 10;
    } else if (element === "water") {
      result += 0.2 * result;
    } else if (element === "vacuum cleaner") {
      result += 0.25 * result;
    } else if (element === "mud") {
      result -= 0.1 * result;
    }
  }
  console.log(`The car is ${result.toFixed(2)}% clean.`);
}
solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
