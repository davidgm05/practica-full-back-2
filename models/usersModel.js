const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    apellido:{
        type: String,
        require: true,
    }
});

const User = mongoose.model("Users", userSchema, "user")

module.exports = User