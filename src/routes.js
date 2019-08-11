const express = require("express");
const CavaleiroController = require("./controllers/CavaleiroController");
const routes = express.Router();

routes.post("/cavaleiros", CavaleiroController.store);
routes.get("/cavaleiros", CavaleiroController.index);

module.exports = routes;
