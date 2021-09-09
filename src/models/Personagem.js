const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    identidade:{
        type: String,
        require: true
    },
    genero:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Personagem", personagemSchema)