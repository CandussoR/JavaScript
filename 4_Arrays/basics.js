let hobbies = ['writing', 'chess', 'hiking'];
console.log(hobbies);

let list = hobbies[0];
console.log(list);

const chores = ['cleaning', 'cooking', 'dishes'];
console.log(chores);

hobbies[1] = 'skating';
console.log(hobbies);

chores[1] = 'ironing';
console.log(chores)

hobbies = ['chess'];
console.log(hobbies);

/*
Doesn't work : reassign a constant.
chores = ['dishes'];
console.log(chores);
*/

hobbies.push('writing', 'reading', 'hiking');
console.log(hobbies);


chores.pop();
console.log(chores);

hobbies.shift('chess');
console.log(hobbies);

hobbies.unshift('skating', 'chess');
console.log(hobbies);

console.log(hobbies.slice(1, 4));

// Begins at index 1, replaces 3 elements and puts the other arguments where they were.
hobbies.splice(1, 3, 'intellectual things');
console.log(hobbies);

// Copies a whole array into another
let newHobbies = [...hobbies];
newHobbies.push('coding');
console.log('newHobbies array is now : ' + newHobbies.join(' '));
let joeyHobbies = ['traveling', 'investing', 'taking photographs'];
let ourHobbies = [...newHobbies, ...joeyHobbies];
console.log('The array of hobbies for Romain and Joey are : ' + ourHobbies);
