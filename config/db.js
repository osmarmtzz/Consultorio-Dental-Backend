const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // en XAMPP suele venir sin contraseña
  database: 'bd_consultorio',
});

module.exports = pool;
