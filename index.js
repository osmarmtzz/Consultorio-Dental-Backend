const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar tus rutas
const authRoutes = require('./routes/auth.routes');
// Aquí puedes agregar más rutas como pacienteRoutes, citasRoutes, etc.
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en http://192.168.1.78:${PORT}`);
});
