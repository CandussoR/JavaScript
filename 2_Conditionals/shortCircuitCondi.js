/*
A relatively clever way to avoid an else - if.
If a var is falsy then another default value, else truthy var.
*/

let favoriteBook = '';
let defaultFavorite = favoriteBook || 'Ulysses';
console.log(`My favorite book is ${defaultFavorite}.`);

favoriteBook = 'La Folie du Jour';
console.log("Now I have modified my favorite book. What's the default ?");
console.log(defaultFavorite);
console.log("So the default value doesn't change. :(");
