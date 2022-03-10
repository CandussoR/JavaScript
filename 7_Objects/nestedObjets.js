let house = {
  buildYear: 1990,
  // Inhabitants is a property which has 3 objects : owners, children, pet.
  inhabitants: {
    // Property owners is an object containing two properties (father and mother) which are objects too.
    owners: {
      father: {
        name: 'Bruno',
        birthYear: 1958,
        eatingConcern () {
          console.log('Qu\'est-ce qu\'on mange ce soir?')
        }
      },
      mother: {
        name: 'Danièle',
        birthYear: 1961
      }
    },

    children: {
      name: 'Romain',
      birthYear: 1990
    },

    pet: {
      cat: {
        name: 'Ezia',
        catYear: 13,
        humanYear: 68
      }
    }
  }
};

house.inhabitants.owners['father'].eatingConcern();

//Use for...in loop to iterate through each property of object.
for (let houseOwners in house.inhabitants.owners) {
  console.log(`${houseOwners}: ${house.inhabitants.owners[houseOwners].name}`)
};
