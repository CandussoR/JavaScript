// Is my age.
let myAge = 31;
// Out two first years
let earlyYears = 2;
// are worth 10.5 years dog years.
earlyYears *= 10.5;
// Rest of the years
let laterYears = myAge - 2;
// are worth 4 dog years.
laterYears *= 4;
// My age for a dog
let dogAge = earlyYears + laterYears;
// my name in lowercase.
let myName = 'Romain'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old \
  in human years which is ${dogAge} years old in dog years.`);
