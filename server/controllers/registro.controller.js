var  db = require('../models');

const registroController = {
    findAll: async (req, res)=>{
        const users = await db.User.findAll();
        res.status(200).json(users)
    },
    create: async (req,res)=>{
        let users = await User.create(req.body);
        res.status(201).json(users);
    },
    update: async (req,res)=>{
        let users =  User.findByPk(req.params.id);
        await users.update(req.body);
        res.status(200).json({users})
    },
    destroy: async (req,res)=>{
        let users = await  User.findByPk(req.params.id);
         users.destroy();
        res.status(200).json({message: "Excluído com sucesso!"})
    }
};

module.exports =  registroController;