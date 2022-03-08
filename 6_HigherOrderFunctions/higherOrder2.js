// Now a function is passed as a parameter for another function.

const addTwo = num => num + 2;

const checkConsistentOutput = (funcParameter, value) => {
  let first = funcParameter(value);
  let second = funcParameter(value);
  if (first === second) {
    return funcParameter(value);
  } else {
    return 'This function returned inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 4));
