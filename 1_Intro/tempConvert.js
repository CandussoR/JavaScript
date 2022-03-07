// This is a constant temperature in Kelvin
const kelvin = 0;
/*
To convert a temperature from kelvin to celsius, we need to know how much is a celsius.*/
const celsius = kelvin - 273;
// Converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees in fahrenheit.`);

let newton = celsius * 0.33;
newton = Math.floor(newton);
console.log(`The temperature is ${newton} in Newton scale.`);
