const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// /user_login => POST
router.post('/user_login', userController.postuser);



module.exports = router;