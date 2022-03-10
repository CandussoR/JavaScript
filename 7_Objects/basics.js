let cat = {
  color: 'dark',
  meow: 'Mrrraou',
  fitness: 'limb',
  playfulness: 'low',
  cuteness: 'unbearable',
  // This is a method.
  affective () {
    console.log('Cat is hoping on you lap and meows till you pet it.')
  }
}

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(cat, 'meow');

cat['Favorite Food'] = 'Cat food';

console.log(cat.cuteness);
console.log();
console.log(cat);

delete cat.cuteness;

console.log();
console.log('This cat cuteness is out of this world.');
console.log(cat);
cat.affective();
