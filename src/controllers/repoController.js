const repoSchema = require("../models/repoSchema")
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try {
        const allRepos = await repoSchema.find()
        res.status(200).send(allRepos)
    } catch (error) {
        console.log(error)
    }
};

const createRepo = async (req, res) => {
    try {
        const newRepo = new repoSchema({
            _id: new mongoose.Types.ObjectId,
            author: req.body.author,
            year: req.body.year,
            type: req.body.type,
            title: req.body.title,
            message: req.body.message,
            createdAt: new Date()
        })
        console.log("NOVO ARQUIVO", newRepo);

        const savedRepo = await newRepo.save();

        if(savedRepo){
            res.status(201).send({
                "message": "Arquivo criado com Sucesso!",
                savedRepo
            })
        }

    } catch(error) {
        console.log(error)
    }
};

const updateRepo = async (req, res) => {
    try{

        const findRepo = await repoSchema.findById(req.params.id)

        if(!findRepo) {
            res.status(404).send({
                "message": "Arquivo não encontrado!",
                "statusCode": 404
            })
        }      
        findRepo.author = req.body.author || findRepo.author
        
        findRepo.year = req.body.year || findRepo.year

        findRepo.type = req.body.type || findRepo.type

        findRepo.title = req.body.title || findRepo.title

        findRepo.message = req.body.message || findRepo.message

        console.log("Arquivo Atualizado", findRepo)
        const savedRepo = await findRepo.save();
        res.status(200).send({
            "message": "Arquivo Atualizado com Sucesso!",
            findRepo
        })

    } catch(error) {
        console.log(error);
    }
};

const deleteRepo = async (req, res) => {
    try {
        // acessar o documento a ser deletado
        const findRepo = await repoSchema.findById(req.params.id)
        // deletar o documento
        await findRepo.delete()
    
        res.status(200).send({
            "message": "Arquivo deletado com sucesso!",
            findRepo
        })
        } catch(error) {
            console.log(error);
        }
}



module.exports = {
    getAll,
    createRepo,
    updateRepo,
    deleteRepo
}