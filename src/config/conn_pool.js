//10/12/2023.conn_pool asi anda bien suelto: > node ./src/config/conn_pool.js

const mysql = require('mysql2');   //mysql
const path = require('path');

//require('dotenv').config(); // requerimos el módulo dotenv
const dotenv= require('dotenv'); // requerimos el módulo dotenv
dotenv.config({path: path.resolve(__dirname, '../../.env')});   //dotenv.config({path: '../../.env'}); 

console.log(process.env.HOST);
console.log(process.env.USER);

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
  // If you manually get a connection from the pool, 
  // then you have to manually put it back in the pool when you're done with it with connection.release(). 
  pool.getConnection((error, connection) => {
    if (error) {
      console.error('Error al obtener una conexión:', error);
    } else {
      console.log('Conexión manual exitosa a la base de datos');
      connection.release();   //x silvia esto aca xq si abajo da error
    }
  });
  //Finalizo la conexion con la base de datos y estar utilizando la memoria RAM
  //conexion.end();   //de Talia PERO ReferenceError: conexion is not defined

  module.exports = {
    conn: pool.promise()
  };

//*****************************************************************************************/
//https://stackoverflow.com/questions/57121227/why-do-we-need-to-release-connection-when-using-connection-pool-in-mysql
//If you manually get a connection from the pool, 
//then you have to manually put it back in the pool when you're done with it with connection.release()

//If all you need to do is a single query, then use 
//pool.query() and let it automatically get a connection from the pool, run the query, then release it back to the pool. 
//But, if you have multiple things you want to do with the connection, 
//such as multiple queries or multiple inserts to the database, 
//then get the connection, do your multiple operations with it and then release it back to the pool

//pool.query() : // Connection is automatically released when query resolves
  pool.query("SELECT * FROM category", function(err, rows, fields) {    
    if(err){
      throw err;
    }else{
      console.log(rows);
      console.log("Pool query exitosa");      
    }
  });

//********************************************************************************************** */
  /*
  const { conn } = pool;
  
  const getItems = async () => {
   try {
        const [rows] = await conn.query('SELECT * FROM product;');
        console.log(rows);
        //console.log(fields);
        return rows;
       } 
   catch (error) 
       {
        throw error;
       } 
    finally 
       {
        conn.releaseConnection();
       }
  }
*/

/*
   const getAll = async () => {
    try {
      const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
      const response = {
        isError: false,
        data: rows
      };
       console.log([rows]);
       return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos recuperar los datos ${e}.`
      };
  
      return error;
    } finally {
      await conn.releaseConnection();
    }
  }
*/
  