const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

// /admin/
router.get('/', adminControllers.admin);
router.post('/search', adminControllers.adminsearch);     //'/search/:busqueda_buscar'
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createprocess);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.editprocess);
   router.get('/delete', adminControllers.delete);
//router.delete('/delete/:id', adminControllers.deleteprocess); error 405: The requested method DELETE is not allowed for this URL.
router.post('/delete/:id', adminControllers.deleteprocess);

module.exports = router;

