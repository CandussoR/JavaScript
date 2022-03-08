// Uses multiple little functions to section a task off small bits.

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//Use the expression function syntax
const addVTA = function(rows, columns) {
  const VTA = costOfMonitors(rows, columns) * 0.20;
  return costOfMonitors(rows, columns) + VTA;
}

console.log(addVTA(5, 4));

// Use the arrow function syntax
const addVTAString = (rows, columns) => {
  console.log('The total price would be ' + addVTA(rows, columns) + ' euros.');
}
addVTAString(5, 4);

//Use of refactored arrow syntax (concice body).
const squareNum = num => num ** 2;
console.log(squareNum(8));
