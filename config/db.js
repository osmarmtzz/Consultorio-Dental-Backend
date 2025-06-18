const mysql = require('mysql2/promise');
require('dotenv').config();

 const pool =  mysql.createPool({
      host: '192.168.1.11',// ip de la base de datos 
      port: 3306,
      user: 'appuser',
      password: '123456',
      database: 'bd_consultorio',
    });

module.exports = pool;
