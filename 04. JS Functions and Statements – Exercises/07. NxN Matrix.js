function makeMatrix(n) {
  let x = n.toString() + " ";
  console.log((x.repeat(n) + "\n").repeat(n));
}

makeMatrix(3);
makeMatrix(2);
