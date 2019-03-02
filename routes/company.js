const path = require('path');

const express = require('express');

<<<<<<< HEAD
const companyController = require('../controllers/company');

const router = express.Router();


=======
const companyController = require('../controllers');

const router = express.Router();

// /company_login => GET
router.get('/company_login', companyController.getcompanylogin);
>>>>>>> origin/master



// /comapny_login => POST
router.post('/company_login', companyController.postcompanylogin);

module.exports = router;