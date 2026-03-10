const FruitsModel = require("../models/FruitModel");

const showAllFruits = async (req, res) => {
  try {
    const fruits = await FruitsModel.showAllFruits();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const showFruit = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await FruitsModel.showFruit(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const createFruit = async (req, res) => {
  try {
    const newFruit = await FruitsModel.create(req.body);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

const updateFruit = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await FruitsModel.showFruit(name);
    const result = await fruit.update(req.body);
    res.status(200).send(result);
  } catch (err) {
    throw res.status(409).send({ error: err });
  }
};
const deleteFruit = async (req, res) => {
  const id = req.params.id;

  try {
    //const fruit = await FruitsModel.showFruit(name);
    const result = await FruitsModel.deleteFruit(id);
    res.status(200).send({
      message: "Fruit deleted successfully",
      deleted: result,
    });
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

module.exports = {
  showAllFruits,
  showFruit,
  createFruit,
  updateFruit,
  deleteFruit,
};
