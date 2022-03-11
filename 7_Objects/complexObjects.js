// Use the this keyword on complexObjects.

let house = {
  buildYear: 1990,
  // This is a private property, even if we can reassign it.
  _forSale: false,
  // Use a getter to check the way the private value is accessed
  get forSale() {
    if (typeof this._forSale == 'boolean') {
      return `It is ${this._forSale} that the house is for sale.`;
    } else {
      return 'Error : It should be either true or false that the house is for sale.';
    }
  },
  set forSale(bool) {
    if (typeof bool === 'boolean') {
      this._forSale = bool;
    } else {
      console.log('Enter either true or false.');
    }
  },
  // Inhabitants is a property which has 3 objects : owners, children, pet.
  inhabitants: {
    // Property owners is an object containing two properties (father and mother) which are objects too.
    owners: {
      father: {
        name: 'Bruno',
        birthYear: 1958,
        isHere: true,
        eatingConcern () {
          console.log('Qu\'est-ce qu\'on mange ce soir?')
        }
      },
      mother: {
        name: 'Danièle',
        birthYear: 1961,
        isHere: true
      }
    },

    children: {
      son: {
        name: 'Romain',
        birthYear: 1990,
        degree: 'Philosophy',
        isHere: true
      },
      daughter: {
        name: 'Tiphanie',
        birthYear: 1987,
        degree: 'International trade',
        isHere: false
      }
    },


    pet: {
      cat: {
        name: 'Ezia',
        catYear: 13,
        humanYear: 68,
        stealFood () {
          console.log(`${this.name} jumps on the table and eats something it doesn\'t like just for the sake of stealing.`);
        }
      }
    }
  }
};

house.inhabitants.owners['father'].eatingConcern();

//Use for...in loop to iterate through each property of object.
for (let houseOwners in house.inhabitants.owners) {
  console.log(`${houseOwners}: ${house.inhabitants.owners[houseOwners].name}`)
};

house.inhabitants.pet['cat'].stealFood();
console.log(house.forSale);
// Trying to reassign _forSale propriety with an invalid value.
house.forSale = null;
console.log(house.forSale);

// Grabing nested propriety with destructured assignment.
const { degree } = house.inhabitants.children['daughter'];
console.log(degree);
// Can call a method too.
const { father } = house.inhabitants.owners;
father.eatingConcern();
