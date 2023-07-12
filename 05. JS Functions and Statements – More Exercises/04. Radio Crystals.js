const cut = (x) => x / 4;
const lap = (x) => (x -= 0.2 * x);
const grind = (x) => (x -= 20);
const etch = (x) => (x -= 2);
const xRay = (x) => (x += 1);
const transportAndWash = (x) => Math.floor(x);

function solve(array) {
  let desiredFrequency = array[0];
  let output = [];

  for (let index = 1; index < array.length; index++) {
    let element = array[index];
    output.push(`Processing chunk ${element} microns`);
    while (element !== desiredFrequency) {
      element = craftingByCutting(element, desiredFrequency, output);
      element = craftingByLapping(element, desiredFrequency, output);
      element = craftingByGrinding(element, desiredFrequency, output);
      element = craftingByEtching(element, desiredFrequency, output);
    }
    output.push(`Finished crystal ${element} microns`);
    console.log(output.join("\n"));
  }
}

function craftingByCutting(element, desiredFrequency, output) {
  let countOfCuts = 0;
  while (cut(element) >= desiredFrequency) {
    element = cut(element);
    element = transportAndWash(element);
    countOfCuts++;
  }
  if (countOfCuts > 0) {
    output.push(`Cut x${countOfCuts}`);
    output.push("Transporting and washing");
  }
  return element;
}
function craftingByLapping(element, desiredFrequency, output) {
  let countOfLaps = 0;
  while (lap(element) >= desiredFrequency) {
    element = lap(element);
    element = transportAndWash(element);
    countOfLaps++;
  }
  if (countOfLaps > 0) {
    output.push(`Lap x${countOfLaps}`);
    output.push("Transporting and washing");
  }

  return element;
}
function craftingByGrinding(element, desiredFrequency, output) {
  let countOfGrinds = 0;
  while (grind(element) >= desiredFrequency) {
    element = grind(element);
    element = transportAndWash(element);
    countOfGrinds++;
  }
  if (countOfGrinds > 0) {
    output.push(`Grind x${countOfGrinds}`);
    output.push("Transporting and washing");
  }
  return element;
}
function craftingByEtching(element, desiredFrequency, output) {
  let countOfEtchs = 0;
  while (etch(element) >= desiredFrequency) {
    element = etch(element);
    element = transportAndWash(element);
    countOfEtchs++;
  }
  if (element - desiredFrequency === 1) {
    element = etch(element);
    countOfEtchs++;
    element = xRay(element);
  }

  if (countOfEtchs > 0) {
    output.push(`Etch x${countOfEtchs}`);
    output.push("Transporting and washing");
    output.push(`X-ray x1`);
  }
  return element;
}
solve([1000, 4000, 8100]);
