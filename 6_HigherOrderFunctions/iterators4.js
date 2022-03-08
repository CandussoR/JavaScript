const newNumbers = [1, 3, 5, 7];

// calling reduce with one parameter which is a callback to a function
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
});

console.log(newSum);

/*
calling reduce with a second parameter which is taken as the initial value
for the accumulator.
*/

const newSum2 = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(`The value of newSum2 with a second parameter of 10 is ${newSum}`);
