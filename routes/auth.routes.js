const express = require('express');
const router = express.Router();
const { registrarPaciente } = require('../controllers/auth/register.controller');
const { loginPaciente } = require("../controllers/auth/login.controller");
const { editProfilePaciente } = require("../controllers/auth/editProfile.controller");



router.post('/register', registrarPaciente);

router.post("/login", loginPaciente);

router.post("/editProfile", editProfilePaciente);


module.exports = router;