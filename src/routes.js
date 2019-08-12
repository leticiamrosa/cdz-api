const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");
const CavaleiroController = require("./controllers/CavaleiroController");
const routes = express.Router();

routes.post(
  "/cavaleiros",
  multer(multerConfig).single("file"),
  CavaleiroController.store
);
routes.get("/cavaleiros", CavaleiroController.index);

module.exports = routes;
