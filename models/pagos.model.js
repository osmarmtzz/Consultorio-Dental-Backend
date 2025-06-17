const db = require("../config/db");

const obtenerCitasConEstadoPago = async (idPaciente) => {
  const [rows] = await db.query(`
    SELECT 
      citas.ID_Cita,
      citas.ID_Paciente,                     -- ⬅️ AGREGA ESTA LÍNEA
      DATE_FORMAT(citas.Fecha, '%d/%m/%Y') AS Fecha,
      citas.Hora,
      citas.Motivo AS servicio,
      citas.Observaciones,
      paciente.Nombre AS paciente,
      COALESCE(ticket_pago.Monto_Total, 500.00) AS costo,
      CASE
        WHEN ticket_pago.ID_Pago IS NOT NULL THEN 'Pagado'
        ELSE 'Pendiente de pago'
      END AS estado
    FROM citas
    LEFT JOIN ticket_pago
      ON ticket_pago.ID_Paciente = citas.ID_Paciente
      AND ticket_pago.Concepto = citas.Motivo
      AND DATE(ticket_pago.Fecha_Pago) = DATE(citas.Fecha)
    INNER JOIN paciente ON paciente.ID_Paciente = citas.ID_Paciente
    WHERE citas.ID_Paciente = ?
    ORDER BY citas.Fecha DESC
  `, [idPaciente]);

  return rows;
};


module.exports = { obtenerCitasConEstadoPago };
