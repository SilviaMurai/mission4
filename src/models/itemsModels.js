const { conn } = require('../config/conn');

const getItems = async (params) => {
  try 
  {
   const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
   //return rows;
   const response = {
    isError: false,
    data: rows
   };
   return response;
  } 
  catch (err) 
  {
  //throw err;
   const error = {
    isError: true,
    message: `Productos NO encontrados: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}

const getItemsBuscados = async (params) => {
  try 
  {const buscar = params.buscar;
   const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM product LEFT JOIN category ON product.category_id = category.category_id LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product_id LIKE "%'+buscar+'%" OR product_name LIKE "%'+buscar+'%" OR licence_name LIKE "%'+buscar+'%";');
   //return rows;
   const response = {
    isError: false,
    data: rows
   };
console.log(rows);   
console.log(rows.length);
console.log('SELECT product.*, category.category_name, licence.licence_name FROM product LEFT JOIN category ON product.category_id = category.category_id LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product_id LIKE "%'+buscar+'%" OR product_name LIKE "%'+buscar+'%" OR licence_name LIKE "%'+buscar+'%";');
   return response;
  } 
  catch (err) 
  {
  //throw err;
   const error = {
    isError: true,
    message: `Productos NO encontrados: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}


module.exports = {
 getItems,
 getItemsBuscados
}

