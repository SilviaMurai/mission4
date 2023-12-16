const path = require('path');

const authControllers = {
   login: (req,res) => res.render(path.resolve(__dirname,'../views/pages/auth/login.ejs'),{title:"Login",stylecss:"login.css"}),   //res.send('Route for login view'),
   loginprocess: (req,res) => res.send('Route for login process'),
   register: (req,res) => res.render('pages/auth/register',{title:"Registrarse",stylecss:"crear_cuenta.css"}),  //res.send('Route for register view'),
   registerprocess: (req,res) => res.send('Route for register process'),
   logout: (req,res) => res.send('Route for logout view')
 }
    
module.exports = authControllers;    
