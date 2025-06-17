const bcrypt = require('bcryptjs');
const RegisterPatientModel = require('../../models/registerPatient.model');

const registrarPaciente = async (req, res) => {
  try {
    const {
      nombre,
      apellidos,
      genero,
      fechaNacimiento,
      telefono,
      direccion,
      email,
      password
    } = req.body;

    if (!nombre || !apellidos || !email || !password) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const existe = await RegisterPatientModel.existeCorreo(email);
    if (existe) {
      return res.status(409).json({ error: 'El correo ya está registrado' });
    }

    const nombreCompleto = ${nombre} ${apellidos};

    // 🔒 Encriptar la contraseña antes de guardar
    const passwordHasheada = await bcrypt.hash(password, 10);

    await RegisterPatientModel.registrar({
      nombreCompleto,
      fechaNacimiento,
      genero,
      telefono,
      direccion,
      email,
      password: passwordHasheada
    });

    return res.status(201).json({ mensaje: 'Paciente registrado exitosamente' });

  } catch (error) {
    console.error('Error en el registro:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { registrarPaciente };