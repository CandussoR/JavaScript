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
Ne marche pas : réassigne une constante.
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

// Begins at index 1, replaces 3 elements by what comes after it.
hobbies.splice(1, 3, 'intellectual things');
console.log(hobbies);
