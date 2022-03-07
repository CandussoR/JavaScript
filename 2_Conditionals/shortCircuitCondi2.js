// Substituing a function to condi

function favBook(fav = '') {
  return fav ? fav : 'Ulysses';
}

console.log('Your fav book is ' + favBook());
console.log(('Your fav book is ' + favBook('La Folie du Jour')));
