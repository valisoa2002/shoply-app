const usersController = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", usersController.getAllUsers);

module.exports = router;
