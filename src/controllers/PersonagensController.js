const Personagem = require("../models/Personagem");

const getAll = async (req, res) => {
  try {
    const personagens = await Personagem.find(); // Promisse
    return res.send({ personagens });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const personagem = await Personagem.findById(id);
    if (!personagem) {
      res.status(404).json({ message: "Personagem não encontrado" });
      return;
    }
    return res.send({personagem})
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports = {
  getAll,
  getById,
};
