const { obtenerCitasConEstadoPago } = require("../../models/pagos.model");

const getCitasYPagos = async (req, res) => {
  const idPaciente = req.params.id;

  try {
    const citas = await obtenerCitasConEstadoPago(idPaciente);
    res.json(citas);
  } catch (error) {
    console.error("Error al obtener citas y pagos:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { getCitasYPagos };
