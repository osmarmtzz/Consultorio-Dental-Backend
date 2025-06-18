const express = require('express');
const router = express.Router();
const { registrarPaciente } = require('../controllers/auth/register.controller');
const { loginPaciente } = require("../controllers/auth/login.controller");
const { editProfilePaciente } = require("../controllers/editProfilePaciente");
const { crearCitaPaciente } = require("../controllers/citas/crearCita.controller");
const { getCitasYPagos } = require("../controllers/pagos/obtenerPagos.controller");
const { registrarPago } = require("../controllers/pagos/registrarPago.controller");


router.post('/register', registrarPaciente);

router.post("/login", loginPaciente);

router.post("/editProfile", editProfilePaciente);

router.post("/agendar", crearCitaPaciente);

router.get("/pagos/:id", getCitasYPagos);

router.post("/registrar-pago", registrarPago);


router.get('/test', (req, res) => {
  res.json({ ok: true, msg: 'Conectado al backend desde otra PC ✅' });
});

module.exports = router;

module.exports = router;
