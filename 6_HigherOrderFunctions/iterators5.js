const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// checks for elements for which condition is true.
console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


console.log(interestingWords.every(word => word.length > 5));
