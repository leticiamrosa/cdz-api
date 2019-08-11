const { Schema, model } = require("mongoose");

const CavaleiroSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    date_born: {
      type: String,
      required: true
    },
    sign: {
      type: String,
      required: true
    },
    group_blood: {
      type: String,
      required: true
    },
    place_born: {
      type: String,
      required: true
    },
    place_train: {
      type: String,
      required: true
    },
    warrior: {
      type: String,
      required: true
    },
    combat_techniques: []
  },
  {
    timestamps: true
  }
);

module.exports = model("Cavaleiro", CavaleiroSchema);
