const Cavaleiro = require("../models/Cavaleiro");

module.exports = {
  async index(req, res) {
    const { name } = req.headers;
    const cavaleiros = await Cavaleiro.find();
    return res.json(cavaleiros);
  },

  async store(req, res) {
    const {
      name,
      age,
      height,
      weight,
      date_born,
      sign,
      group_blood,
      place_born,
      place_train,
      warrior,
      combat_techniques,
      photo
    } = req.body;

    // Check if there is a Cavaleiro
    const cavaleiroExists = await Cavaleiro.findOne({ name });

    if (cavaleiroExists) {
      return res.json(cavaleiroExists);
    }

    const cavaleiro = await Cavaleiro.create({
      name,
      age,
      height,
      weight,
      date_born,
      sign,
      group_blood,
      place_born,
      place_train,
      warrior,
      combat_techniques,
      photo
    });

    return res.json(cavaleiro);
  }
};
