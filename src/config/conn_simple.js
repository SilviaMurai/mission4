//10/12/2023.conn_simple asi anda bien suelto: > node ./src/config/conn_simple.js

const mysql = require('mysql2');   //mysql
const path = require('path');

//require('dotenv').config(); // requerimos el módulo dotenv
const dotenv= require('dotenv'); // requerimos el módulo dotenv
dotenv.config({path: path.resolve(__dirname, '../../.env')});   //dotenv.config({path: '../../.env'}); 

console.log(process.env.HOST);
console.log(process.env.USER);

const connection = mysql.createConnection({
 host: process.env.HOST, // usamos las variables de entorno
 user: process.env.USER,
 password: process.env.DBPASS,
 database: process.env.DB,
 port: process.env.DBPORT
});

//connection.connect();
//module.exports = connection;

connection.connect(function(err) {
    if (err) 
    {
      throw err; //console.error('Error al obtener una conexión:', error);
    }
    else 
    {
     console.log('Conexión exitosa a la base de datos');
     //connection.close();
    }
  });


connection.query(
    'SELECT * FROM product;',
    function(err,results,fields) {
        console.log(results);
        console.log(fields);
        connection.close();
    }
   );
   
   