const mysql = require('mysql2/promise');

(async () => {
  try {
    const pool = await mysql.createPool({
      host: '192.168.1.11',
      port: 3306,
      user: 'appuser',
      password: '123456',
      database: 'bd_consultorio',
    });

    const [rows] = await pool.query('SELECT 1');
    console.log('✅ Conexión exitosa', rows);
  } catch (err) {
    console.error('❌ Error de conexión:', err.message);
  }
})();
