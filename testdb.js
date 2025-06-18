const mysql = require('mysql2/promise');

(async () => {
  try {
    const pool = await mysql.createPool({
      host: '192.168.50.51',// ip de la base de datos 
      port: 3306,
      user: 'prueba',
      password: '123456789',
      database: 'bd_consultorio',
    });
    

    const [rows] = await pool.query('SELECT 1');
    console.log('✅ Conexión exitosa', rows);
  } catch (err) {
    console.error('❌ Error de conexión:', err.message);
  }
})();
