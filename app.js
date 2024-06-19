const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/userRouter")
const favoritesRouter = require("./routers/favoriteRouter")
const PORT = 3000;
require("dotenv").config();
const app = express()

app.use(express.json());
app.use(cors());

const urlMongo = process.env.DATABASE_URL;

mongoose.connect(urlMongo);

const db = mongoose.connection;

db.on("error", (error) => {
console.error("error al conectar")
})

db.once("connected", () => {
    console.log("success connected")
})

db.on("disconnected", (error) => {
    console.error("disconnected")
})

app.use("/users", userRouter)
app.use("/favorites", favoritesRouter)

app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}`)
})