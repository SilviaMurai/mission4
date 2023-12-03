const shopControllers = {
    shop: (req,res) => res.render('pages/tienda/shop'),   //res.send('Route for Shop View'),
    item: (req,res) => res.render('pages/tienda/item:id'),   //res.send('Route for find and retrieve an item from an id'),
 itemadd: (req,res) => res.send('Route for adding an item to shop cart'),
    cart: (req,res) => res.render('pages/tienda/carrito'),   //res.send('Route for cart View'),
 cartprocess: (req,res) => res.send('Route for checkout page')
}
    
module.exports = shopControllers;    
