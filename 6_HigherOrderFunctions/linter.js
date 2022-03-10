// Linter project. Has a lot of cleaning to do for less indentations level.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
console.log(storyWords.length);

const count = [];
for (let i = 0; i < overusedWords.length; i++) {
  for (let j = 0; j < storyWords.length; j++) {
    if (overusedWords[i] === storyWords[j]) {
      if (count[overusedWords[i]]) {
        count[overusedWords[i]] += 1
      } else {
        count[overusedWords[i]] = 1;
      }
    }
  }
}
console.log(count);

const betterWords = storyWords.filter(word => !(unnecessaryWords.includes(word)));

let sentence = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentence += 1;
  }
});

// Function doesn't seem greatly designed.
const review = () => {
  console.log(`The story has ${storyWords.length} words and ${sentence} sentences.`);
  for (const [key, value] of Object.entries(count)) {
    if (value !== 0) {
      (value === 1) ? console.log(`You used ${key} ${value} time.`) : console.log(`You used ${key} ${value} times.`);
    }
  }
}
review();

console.log(betterWords.join(' '));

/*
Other tasks :
  - remove the overused words every other time they appear.
  - write a function that finds the word that appears the greatest
    number of times;
  - replaced overused words with something else;
*/
