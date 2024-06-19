const { addToFavorites, getFavorites, deleteFavorites } = require("../controllers/favoritesController");

const router = require("express").Router();

router.get("/getfavorites", getFavorites)
router.post("/addtofavorites/:id", addToFavorites)
router.delete("/deletefavorites/:id", deleteFavorites)

module.exports = router