const authControllers = {
   login: (req,res) => res.render('pages/auth/login'),   //res.send('Route for login view'),
   //loginprocess: (req,res) => res.send('Route for login process'),
   register: (req,res) => res.render('pages/auth/register'),  //res.send('Route for register view'),
   // registerprocess: (req,res) => res.send('Route for register process'),
   logout: (req,res) => res.send('Route for logout view')
 }
    
module.exports = authControllers;    
