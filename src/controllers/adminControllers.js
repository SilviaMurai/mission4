const adminControllers = {
    admin: (req,res) => res.send('Route for Admin view'),
    create: (req,res) => res.send('Route for create view'),
    createprocess: (req,res) => res.send('Route for create process'),
    edit: (req,res) => res.send('Route for item:id view'),
    editprocess: (req,res) => res.send('Route for item:id process'),
    deleteprocess: (req,res) => res.send('Route for item:id delete')
   }
   
   module.exports = adminControllers;