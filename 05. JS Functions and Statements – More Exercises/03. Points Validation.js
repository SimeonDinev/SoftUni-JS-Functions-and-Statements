const formula = (x1, y1, x2, y2) =>
  Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

function printOutput(x1, y1, x2, y2) {
  if (formula(x1, y1, x2, y2)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

function pointsValidation(coordinates) {
  let x1 = coordinates[0];
  let y1 = coordinates[1];
  let x2 = coordinates[2];
  let y2 = coordinates[3];

  printOutput(x1, y1, 0, 0);
  printOutput(x2, y2, 0, 0);
  printOutput(x1, y1, x2, y2);
}

pointsValidation([3, 0, 0, 4]);
console.log(" ");
pointsValidation([2, 1, 1, 1]);
