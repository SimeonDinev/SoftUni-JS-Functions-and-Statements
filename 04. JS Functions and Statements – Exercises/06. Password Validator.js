const checkIfIsInvalidLength = (x) => x.length < 6 || x.length > 10;
const checkIfNotContainAtLeastTwoDigits = (x) => x.match(/\d{2,}/) === null;
const checkIfDontHaveLettersOrDigits = (x) =>
  x.match(/^[A-Za-z0-9]*$/) === null;

function validatePassword(password) {
  const errorsArray = [];

  if (checkIfIsInvalidLength(password)) {
    errorsArray.push("Password must be between 6 and 10 characters");
  }
  if (checkIfDontHaveLettersOrDigits(password)) {
    errorsArray.push("Password must consist only of letters and digits");
  }
  if (checkIfNotContainAtLeastTwoDigits(password)) {
    errorsArray.push("Password must have at least 2 digits");
  }

  if (errorsArray.length > 0) {
    return errorsArray.join("\n");
  } else {
    return "Password is valid";
  }
}

const result = validatePassword("logIn");
console.log(result);
