const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

//const uploadFiles = require('../middlewares/uploadFiles');
//const validateInput = require('../middlewares/validator');

//npm install --save express-validator
const {body}= require ('express-validator');      //12/12/2023

router.get('/', adminControllers.admin);
router.post('/', adminControllers.adminsearch);     //'/search/:buscar'
  router.get('/create', adminControllers.create);
  router.post('/create', adminControllers.createprocess);
router.get('/edit/:id', adminControllers.edit);
  router.put('/edit/:id', adminControllers.editprocess);
//router.delete('/delete/:id', adminControllers.deleteprocess); error 405: The requested method DELETE is not allowed for this URL.
router.get('/delete/:id', adminControllers.delete);
router.post('/delete/:id', adminControllers.deleteprocess);

module.exports = router;

