const path = require('path');

const express = require('express');

const projectsController = require('../controllers/projects');

const router = express.Router();

// /user_login => GET
router.post('/projects_login', projectsController.postproject);



module.exports = router;