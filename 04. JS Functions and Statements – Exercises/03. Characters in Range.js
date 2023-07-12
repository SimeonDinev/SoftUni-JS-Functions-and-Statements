function printASCIIcharacters(char1, char2) {
  let firstASCIIChar = char1.charCodeAt(0);
  let secondASCIIChar = char2.charCodeAt(0);

  let result = validateOperation(firstASCIIChar, secondASCIIChar);
  console.log(result.join(" "));
}

function validateOperation(firstASCIIChar, secondASCIIChar) {
  let text = [];

  if (firstASCIIChar < secondASCIIChar) {
    for (let index = firstASCIIChar + 1; index < secondASCIIChar; index++) {
      text.push(String.fromCharCode(index));
    }
  } else {
    for (let index = secondASCIIChar + 1; index < firstASCIIChar; index++) {
      text.push(String.fromCharCode(index));
    }
  }
  return text;
}

printASCIIcharacters("a", "d");
printASCIIcharacters("#", ":");
printASCIIcharacters("C", "#");
