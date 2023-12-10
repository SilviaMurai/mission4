const mysql = require('mysql2');   //mysql

const dotenv= require('dotenv'); // requerimos el módulo dotenv
dotenv.config({path: '../../.env'}); 

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB,
    port: process.env.DBPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

 // Testeamos que la conexión sea exitosa
 pool.getConnection((error, connection) => {
    if (error) {
      console.error('Error al obtener una conexión:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
      connection.release();
    }
  });

  module.exports = {
    conn: pool.promise()
  };
