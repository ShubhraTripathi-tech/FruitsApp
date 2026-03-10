const fruitsArray = require("../fruits.json");
class FruitModel {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }

  static showAllFruits() {
    return fruitsArray.map((f) => new FruitModel(f));
  }

  static showFruit(name) {
    const fruits = fruitsArray.filter((fruit) =>
      fruit.name.toLowerCase().startsWith(name.toLowerCase()),
    );
    if (fruits.length > 0) {
      return fruits.map((f) => new FruitModel(f));
    } else {
      throw "No fruits found with that name";
    }
  }

  static create(data) {
    const newFruit = data;
    console.log(newFruit);

    newFruit["id"] = fruitsArray.length + 1;
    fruitsArray.push(newFruit);

    return new FruitModel(newFruit);
  }

  update(data) {
    const updateFruit = fruitsArray.find(
      (fruit) => fruit.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (updateFruit) {
      updateFruit.name = data.name;
      return new FruitModel(updateFruit);
    } else {
      throw "Fruit not found";
    }
  }
  delete(data) {
    const index = fruitsArray.findIndex((fruit) => fruit.id === data.id);

    if (index !== -1) {
      const deletedFruit = fruitsArray.splice(index, 1)[0];
      return deletedFruit;
    } else {
      throw "Fruit not found";
    }
  }
}
module.exports = FruitModel;
