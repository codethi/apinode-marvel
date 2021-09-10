const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
        lowercase: true
    },
    identidade:{
        type: String,
        require: true,
        lowercase: true
    },
    genero:{
        type: String,
        require: true,
        lowercase: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Personagem", personagemSchema)