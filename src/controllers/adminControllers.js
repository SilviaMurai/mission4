const itemsServices = require('../services/itemsServices');

const adminView = async (req, res) => {
    const { data } = await itemsServices.getItems();
    res.render('pages/admin/admin',
    {
      view: {
        title: 'Listado de productos | Admin Funkoshop'
      },
      items: data
    });
}


const adminSearch = async (req, res) => {
//const bodyParser = require('body-parser');
//const urlencodedParser = bodyParser.urlencoded({ extended: false })    
//console.log(req.body.busqueda_buscar);    
    const postparams =  {buscar: "pokemon"};;  //{buscar: req.body.busqueda_buscar};
console.log(postparams);
    const { data } = await itemsServices.getItemsBuscados(postparams);     //(req.params)
    res.render('pages/admin/admin',
    {
      view: {
        title: 'Listado de productos | Admin Funkoshop'
      },
      items: data
    });
}


const adminControllers = {
      admin: adminView,  //(req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin view'),
adminsearch: adminSearch,  //(req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin Search view'),
     create: (req,res) => res.render('pages/admin/create'),   //res.send('Route for create view'),
createprocess: (req,res) => res.send('Route for create process'),
      edit: (req,res) => res.render('pages/admin/edit'),  //'pages/admin/edit:id'  //res.send('Route for item:id view'),
editprocess: (req,res) => res.send('Route for item:id process'),
deleteprocess: (req,res) => res.send('Route for item:id delete')
   }
   
   module.exports = adminControllers;

