const mongoose = require("mongoose")

const repoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId, // um tipo de id do mongo(ele vai criar pra nós)
        author:{
            type: String,
            required: true
        }, 
        year: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date()
        } // data de criação, o new date vai criar a data automaticamente
});

module.exports = mongoose.model("repos", repoSchema) // exportando o meu schema para usar em outros arquivos


