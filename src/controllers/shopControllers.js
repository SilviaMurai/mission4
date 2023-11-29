const shopControllers = {
    shop: (req,res) => res.send('Route for Shop View'),
    item: (req,res) => res.send('Route for find and retrieve an item from an id'),
    itemadd: (req,res) => res.send('Route for adding an item to shop cart'),
    cart: (req,res) => res.send('Route for cart View'),
    cartprocess: (req,res) => res.send('Route for checkout page')
}
    
module.exports = shopControllers;    