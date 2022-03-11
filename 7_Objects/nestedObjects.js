let house = {
  buildYear: 1990,
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
          console.log(`${house.inhabitants.pet['cat'].name} jumps on the table and eats something it doesn\'t like just for the sake of stealing.`);
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
