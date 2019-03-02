const path = require('path');

const express = require('express');

const companyController = require('../controllers');

const router = express.Router();

// /company_login => GET
router.get('/company_login', companyController.getcompanylogin);



// /comapny_login => POST
router.post('/company_login', companyController.postcompanylogin);

module.exports = router;