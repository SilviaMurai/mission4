const itemsServices = require('../services/itemsServices');

const adminView = async (req, res) => {
    const { data } = await itemsServices.getItems(req.params);
    res.render('pages/admin/admin',
    {
     title: "Admin",
     stylecss:"admin.css",
     items: data
    });
}


const adminSearch = async (req, res) => {          //POST
console.log(req.body);                             // 12/12/2023.empezo a andar despues de install express-validator ???
 const postparams =  {buscar:req.body.buscar};     // {buscar: "harry"};  //{buscar: req.body.busqueda_buscar};
 const {data}  = await itemsServices.getItemsBuscados(postparams);
 res.render('pages/admin/admin',
 {
  title: "Admin",
  stylecss:"admin.css",
  items: data
 });    
}

const adminItemEdit = async (req, res) => {       //GET
  //console.log('itemedit body '+req.body.id); 
  console.log('adminItemEdit params '+req.params.id); 
  //const postparams =  {id: "1"};  
  const getparams =  {id: req.params.id}; 
  //console.log(postparams);
  const { data } = await itemsServices.getItem(getparams);
  //console.log(data);
  res.render('pages/admin/edit',
      {
       title: "Editar",
       stylecss:"creatstyle.css",
       item: data
      });                    
  }

  const adminItemDelete = async (req, res) => {
    const postparams =  {id: "14"}  //para que siempre deletee el item 14
    //console.log(postparams);
    const ok = await itemsServices.deleteItem(postparams);     
    res.render('pages/admin/delete',
    {
     title: "Deletear", 
     stylecss:"admin.css",
     id: postparams.id
    });        
  }

//*******************************************************************************************************
const adminControllers = {
  admin:         adminView,  //(req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin view'),
  adminsearch:   adminSearch,
  create:        (req,res) => res.render('pages/admin/create',{title: "Crear",stylecss:"creatstyle.css"}),   //res.send('Route for create view'),
  createprocess: (req,res) => res.send('Route for create process'),
  edit:          adminItemEdit,  //(req,res) => res.render('pages/admin/edit'),  //GET 'pages/admin/edit:id'  //res.send('Route for item:id view'),
  editprocess:   (req,res) => res.send('Route for item:id process'),   //PUT
  delete:        (req,res) => res.send('Route for delete'),  
  deleteprocess: adminItemDelete  //(req,res) => res.render('pages/admin/delete'),  //res.send('Route for item:id delete')
 }
   
 module.exports = adminControllers;

