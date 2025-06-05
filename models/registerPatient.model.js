const db = require('../config/db');

const RegisterPatientModel = {
  async existeCorreo(correo) {
    const [rows] = await db.query('SELECT * FROM paciente WHERE Correo = ?', [correo]);
    return rows.length > 0;
  },

  async registrar({
    nombreCompleto,
    fechaNacimiento,
    genero,
    telefono,
    direccion,
    email,
    password
  }) {
    const [res] = await db.query(`
      INSERT INTO paciente (Nombre, Fecha_nacimiento, Genero, Celular, Direccion, Correo, password)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [nombreCompleto, fechaNacimiento, genero, telefono, direccion, email, password]);

    return res;
  }
};

module.exports = RegisterPatientModel;
