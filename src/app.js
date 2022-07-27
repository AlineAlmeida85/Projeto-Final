const express = require('express'); // requerindo o express
const app = express(); // chamamos o express jogando ele numa variável

const cors = require('cors'); // requerindo o cors
app.use(cors()); // usando o cors

require('dotenv-safe').config(); // requerindo o dotenv

const db = require('./database/mongoConfig'); // requerindo o arquivo de configuração do banco de dados
db.connect(); // chamando o banco de dados


const repoRoutes = require("./routes/repoRoutes");

app.get('/', (req, res) =>{
    res.status(200).send({
        title: "<h1>Reprograma -> Projeto Final</h1>",
        version: "<h4>1.0.0</h4>",
        mensagem: "<h2>Este é o meu Projeto!</h2>"
    })
})

app.use(express.json()); // usando o express pra conseguir ler as informações que vem do body
app.use("/repos", repoRoutes);

module.exports = app; // exportando o app para ser usado em outros arquivos
