const User = require("../models/usersModel");

const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        if(!users){
            return res.status(204).json({
                status: "error",
                message: "no se han d¡encontrado usuarios",
            })
        }
        return res.status(200).json({
            status: "success",
            data: users,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "no se puudo traer los users",
            error: error.message,
        });
    }
}

const getUserById = async (req,res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId);
        if(!user){
            return res.status(204).json({
                status: "error",
                message: "no se ha encontrado el usuario",
            })
        }
        return res.status(200).json({
            status: "success",
            data: user,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "no se puudo traer los users",
            error: error.message,
        });
    }
}

const postUser = async (req,res) => {
    try{
        const {nombre, apellido} = req.body;
        const newUser = new User({
            nombre,
            apellido,
        })
        await newUser.save()
        return res.status(200).json({
            status: "success",
            data: newUser,
        })
    } catch (error) {
       return res.status(400).json({
        status: "error",
        message: "no se pudo crear el usuario",
        error: error.message,
       })
    }
}

const updateUser = async (req,res) => {
    try{
        const {nombre, apellido} = req.body;
        const userId = req.params.id;

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {nombre, apellido},
            {new: true}
        )

        if(!updateUser){
            return res.status(204).json({
                status: "success",
                message: "el user no a sido encontrado"
            })
        }
        
        return res.status(200).json({
            status: "success",
            data: updateUser,
        })
    } catch (error) {
       return res.status(400).json({
        status: "error",
        message: "no se pudo actualizar el usuario",
        error: error.message,
       })
    }
}

module.exports = {getUsers, getUserById, postUser, updateUser}