// Iterate with method forEach instead of for loop.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Use the arrow syntax.
fruits.forEach(fruitItem => console.log('I want to eat a ' + fruitItem));

// or first define a function
function printFruit(fruit){
  console.log(fruit);
}
fruits.forEach(printFruit);

// or you can also write it like this.
fruits.forEach(function(fruitItem){
  console.log(`Looks like a delicious ${fruitItem}!`);
})
