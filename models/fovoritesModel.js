const mongoose = require("mongoose");

const favoritesStchema = new mongoose.Schema({
    favoritos:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    }
})

const Favorites = mongoose.model("Favorites", favoritesStchema, "favorite")

module.exports = Favorites