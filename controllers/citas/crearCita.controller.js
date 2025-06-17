const { registrarCitaPaciente } = require("../../models/registrarCitaPaciente.model");

const crearCitaPaciente = async (req, res) => {
  const { fecha, hora, motivo, observaciones, idPaciente } = req.body;

  if (!fecha || !hora || !motivo || !idPaciente) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  try {
    await registrarCitaPaciente({ fecha, hora, motivo, observaciones, idPaciente });
    res.status(201).json({ mensaje: "Cita registrada correctamente." });
  } catch (error) {
    console.error("Error al registrar cita:", error);
    res.status(500).json({ error: "Error en el servidor." });
  }
};

module.exports = { crearCitaPaciente };
