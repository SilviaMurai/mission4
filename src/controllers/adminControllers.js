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
    const postparams =  {buscar: "harry"};  //{buscar: req.body.busqueda_buscar};
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

const adminItemEdit = async (req, res) => {
      const postparams =  {id: "1"};  
      //console.log(postparams);
      const { data } = await itemsServices.getItem(postparams);
//console.log(data);
//console.log(postparams);
      res.render('pages/admin/edit',
      {
        view: {
          title: 'Edicion de producto | Admin Funkoshop'
        },
        item: data
      });         
           
  }

  const adminItemDelete = async (req, res) => {
    const postparams =  {id: "14"}  //,buscar: "harry"};  //{buscar: req.body.busqueda_buscar};
    //console.log(postparams);
    const ok = await itemsServices.deleteItem(postparams);     
    res.redirect('/admin');      
  }

//*******************************************************************************************************
const adminControllers = {
      admin: adminView,  //(req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin view'),
adminsearch: adminSearch,  //(req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin Search view'),
     create: (req,res) => res.render('pages/admin/create'),   //res.send('Route for create view'),
createprocess: (req,res) => res.send('Route for create process'),
      edit: adminItemEdit,  //(req,res) => res.render('pages/admin/edit'),  //'pages/admin/edit:id'  //res.send('Route for item:id view'),
editprocess: (req,res) => res.send('Route for item:id process'),
delete: (req,res) => res.send('Route for delete'),  
deleteprocess: adminItemDelete  //(req,res) => res.render('pages/admin/delete'),  //res.send('Route for item:id delete')
   }
   
   module.exports = adminControllers;

