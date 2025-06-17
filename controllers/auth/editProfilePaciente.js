const db = require('../../config/db');

const editProfilePaciente = async (req, res) => {
  const {
    ID_Paciente,
    Nombre,
    Correo,
    Telefono,
    Fecha_nacimiento,
    Genero
  } = req.body;

  if (!ID_Paciente) {
    return res.status(400).json({ error: "ID del paciente no proporcionado" });
  }

  try {
    await db.query(
      `UPDATE paciente 
       SET Nombre = ?, Correo = ?, Telefono = ?, Fecha_nacimiento = ?, Genero = ?
       WHERE ID_Paciente = ?`,
      [Nombre, Correo, Telefono, Fecha_nacimiento, Genero, ID_Paciente]
    );

    const [rows] = await db.query("SELECT * FROM paciente WHERE ID_Paciente = ?", [ID_Paciente]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Paciente no encontrado" });
    }

    const pacienteActualizado = rows[0];

    res.status(200).json({
      mensaje: "Perfil actualizado correctamente",
      pacienteActualizado: pacienteActualizado
    });
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { editProfilePaciente };