const adminControllers = {
    admin: (req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin view'),
    create: (req,res) => res.render('pages/admin/create'),   //res.send('Route for create view'),
createprocess: (req,res) => res.send('Route for create process'),
    edit: (req,res) => res.render('pages/admin/edit:id'),   //res.send('Route for item:id view'),
editprocess: (req,res) => res.send('Route for item:id process'),
deleteprocess: (req,res) => res.send('Route for item:id delete')
   }
   
   module.exports = adminControllers;