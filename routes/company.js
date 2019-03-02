const path = require('path');

const express = require('express');


const companyController = require('../controllers/company');

const router = express.Router();




// /comapny_login => POST
router.post('/company_login', companyController.postcompanylogin);

module.exports = router;