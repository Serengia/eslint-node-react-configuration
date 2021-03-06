const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();
router.route("/").post(userController.createUser);
router.route("/:id").get(userController.getUser);

module.exports = router;
