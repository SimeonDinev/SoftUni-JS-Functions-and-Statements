function solve(x) {
  let percents = x / 10;
  let dots = 10 - percents;

  if (dots === 0) {
    console.log(`${x}% Complete!${"\n"}[${"%".repeat(10)}]`);
  } else {
    console.log(
      `${x}% [${"%".repeat(percents)}${".".repeat(
        dots
      )}]${"\n"}Still loading...`
    );
  }
}
solve(-100);
