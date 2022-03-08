// Minimal for loop
for (let counter = 5 ; counter <= 10; counter++) {
  console.log(counter);
}

// Using nested for loops to compare arrays.

const bobsFollowers = ['Joe', 'Mama', 'Brad', 'Claire'];
const tinasFollowers = ['Mike', 'Brad', 'Claire'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

// Basic while loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// do-while loops

// break statement
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (i === 3) {
    break;
  }
  console.log(rapperArray[i]);
}
console.log('And if you don\'t know, now you know.');
