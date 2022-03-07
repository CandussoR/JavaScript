console.log('This is a string');
console.log('A string is a ' + 'string');
console.log('    Tons of whitespace taken out     '.trim());
console.log('Let\'s shout'.toUpperCase());
console.log('SHH! LOWER YOUR VOICE!'.toLowerCase());

console.log(Math.random());
console.log(Math.floor(Math.random() * 50));
console.log(Math.ceil(Math.random() * 0.7));
console.log(Number.isInteger(34));

var favoriteBook = 'La Folie du Jour';
var numPages = 35;

let favoriteProgrammingLanguage = 'Java';
favoriteProgrammingLanguage += 'Script';
console.log(favoriteProgrammingLanguage);

const dreamedJob = 'Translator';

console.log('Mon livre préféré est ' + favoriteBook);
//String extrapolation using backticks.
console.log(`I\'d love to be a ${dreamedJob}.`);

console.log(typeof favoriteBook);
console.log(typeof numPages);
