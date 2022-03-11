const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Return an array of robot keys.
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Return an array of arrays containing key and value.
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot without modifying robot:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);
console.log(robot);

// Declaring a newNewRobot while modifying newRobot :
const newRobot = Object.assign(newRobot, {canCook: true, badAtMaths: true})
console.log(newNewRobot);
console.log(newRobot);
