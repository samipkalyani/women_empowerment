const path = require('path');

const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

<<<<<<< HEAD
// auth => GET
=======
// /user_login => GET
>>>>>>> origin/master
router.get('/auth', authController.getauth);



module.exports = router;