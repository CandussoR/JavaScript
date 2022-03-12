// CodeCademy project.

const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses['appetizers'];
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  get mains() {
    return this._courses['mains'];
  },
  set mains(main) {
    this._courses.mains = main;
  },
  get desserts() {
    return this._courses['desserts'];
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    const total = appetizer.price + mains.price + desserts.price;
    return `Your menu consists of ${appetizer.name}, ${mains.name}, ${desserts.name} for a total of ${total} dollars.`
  }
};

menu.addDishToCourse('appetizers', 'Savory Party Bread', 9);
menu.addDishToCourse('appetizers', 'Teriyaki Pineapple Meatballs', 12);
menu.addDishToCourse('appetizers', 'Hot Spinach Artichoke Dip', 8);
menu.addDishToCourse('mains', 'Beef Enchiladas', 15);
menu.addDishToCourse('mains', 'Cheeseburger', 12);
menu.addDishToCourse('mains', 'Fondue', 15);
menu.addDishToCourse('desserts', 'Café Gourmand', 12);
menu.addDishToCourse('desserts', 'Tiramisu', 9);
menu.addDishToCourse('desserts', 'Profiteroles', 12);

let meal = menu.generateRandomMeal();
console.log(meal);
