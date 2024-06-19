const Favorites = require("../models/fovoritesModel");

const addToFavorites = async (req,res) => {
    try{
        const userId = req.params.id;
        const addFavorites = new Favorites({
            favoritos: userId,
        })
        await addFavorites.save()
        return res.status(200).json({
            status: "success",
            data: addFavorites
        })
    } catch (error) {
       return res.status(400).json({
        status: "error",
        message: "no se pudo añadir a favoritos",
        error: error.message,
       })
    }
}

const getFavorites = async (req,res) => {
    try{
       const favoritos = await Favorites.find().populate("favoritos");
       if(!favoritos){
        return res.status(204).json({
            status: "error",
            message: "no hay favoritos",
        })
       } 
       return res.status(200).json({
        status: "success",
        data: favoritos,
       })
    } catch (error) {
       return res.status(400).json({
        status: "error",
        message: "no se pudo traer favoritos",
        error: error.message,
       })
    }
}

const deleteFavorites = async (req,res) => {
    try{
       const userId = req.params.id;
       const deleteUser = await Favorites.findByIdAndDelete(userId)
       if(!deleteUser){
        return res.status(204).json({
            status: "error",
            message: "no se encontro el user"
        })
       }
       return res.status(200).json({
        status: "success",
        data: deleteUser
       })
     } catch (error) {
        return res.status(400).json({
         status: "error",
         message: "no se pudo eliminar de favoritos",
         error: error.message,
        })
     }
}

module.exports = {addToFavorites, getFavorites, deleteFavorites}