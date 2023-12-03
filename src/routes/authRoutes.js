const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.login);
//router.post('/login/:id', authControllers.loginprocess);
router.get('/register', authControllers.register);
//router.post('/register/:id', authControllers.registerprocess);
router.get('/logout', authControllers.logout);

module.exports = router;