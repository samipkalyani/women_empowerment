const path = require('path');

const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();


// auth => GET

router.get('/auth', authController.getauth);



module.exports = router;