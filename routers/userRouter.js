const { getUsers, postUser, updateUser, getUserById } = require("../controllers/userController");

const router = require("express").Router();

router.get("/getusers", getUsers)
router.get("/getuserbyid/:id", getUserById)
router.post("/postuser", postUser)
router.patch("/updateuser/:id", updateUser)


module.exports = router