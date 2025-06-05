const express = require('express');
const router = express.Router();
const { registrarPaciente } = require('../controllers/auth/register.controller');
const { loginPaciente } = require("../controllers/auth/login.controller");


router.post('/register', registrarPaciente);

router.post("/login", loginPaciente);


module.exports = router;
