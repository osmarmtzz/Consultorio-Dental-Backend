const db = require("../config/db");

const registrarCitaPaciente = async ({ fecha, hora, motivo, observaciones, idPaciente }) => {
  const sql = `
    INSERT INTO citas (Fecha, Hora, Motivo, Observaciones, ID_Paciente)
    VALUES (?, ?, ?, ?, ?)
  `;
  await db.query(sql, [fecha, hora, motivo, observaciones, idPaciente]);
};

module.exports = { registrarCitaPaciente };
