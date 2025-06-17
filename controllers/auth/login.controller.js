const bcrypt = require('bcryptjs');
const db = require('../../config/db');

const loginPaciente = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM paciente WHERE Correo = ?", [email]);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Correo no registrado" });
    }

    const usuario = rows[0];
    const passwordEnBD = usuario.password;

    let match = false;

    // Si la contraseña en BD es un hash bcrypt (comienza con $2a$ o $2b$), usar compare
    if (passwordEnBD.startsWith("$2")) {
      match = await bcrypt.compare(password, passwordEnBD);
    } else {
      // Si es texto plano, comparar directamente
      match = password === passwordEnBD;
    }

    if (!match) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    res.status(200).json({ mensaje: "Login exitoso", usuario });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { loginPaciente };
