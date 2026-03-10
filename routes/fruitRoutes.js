const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controller/FruitsController");

fruitsRouter.get("/", fruitsController.showAllFruits);
fruitsRouter.get("/:name", fruitsController.showFruit);
fruitsRouter.post("/", fruitsController.createFruit);
fruitsRouter.patch("/:name", fruitsController.updateFruit);
fruitsRouter.delete("/:id", fruitsController.deleteFruit);

module.exports = fruitsRouter;
