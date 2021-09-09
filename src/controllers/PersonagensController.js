const Personagem = require("../models/Personagem")

const getAll = async (req, res) => {
    try {
        const personagens = await Personagem.find() // Promisse
        return res.send({personagens})
    } catch (err) {
        res.status(500).send({error: err})
    }
};

