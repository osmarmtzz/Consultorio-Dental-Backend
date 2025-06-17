// controllers/pagos/registrarPago.controller.js
const db = require("../../config/db");

const registrarPago = async (req, res) => {
  const { idPaciente, fechaPago, concepto, monto } = req.body;

  try {
    await db.query(`
      INSERT INTO ticket_pago (Fecha_Pago, ID_Paciente, Monto_Total, Concepto)
      VALUES (?, ?, ?, ?)
    `, [fechaPago, idPaciente, monto, concepto]);

    res.status(201).json({ mensaje: "Pago registrado correctamente" });
  } catch (error) {
    console.error("Error al registrar pago:", error);
    res.status(500).json({ error: "Error al registrar el pago" });
  }
};

module.exports = { registrarPago };
