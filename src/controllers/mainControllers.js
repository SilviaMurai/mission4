const mainControllers = {
 //home: (req,res) => res.send('Route for Home View'),
 home: (req,res) => res.render('index',{title:"Home",stylecss:"index.css"}),
 contact: (req,res) => res.render('pages/admin/contact',{title:"Contacto",stylecss:"admin.css"}),   //contact: (req,res) => res.send('Route for Contact View'),
 about: (req,res) => res.send('Route for About View'),
 faqs: (req,res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;
