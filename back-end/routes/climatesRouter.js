const rescue = require('express-rescue');
const express = require('express');
const ClimatesController = require('../controllers/ClimatesController');
const ClimatesErrorController = require('../controllers/errors/ClimatesErrorController');

const climatesRouter = express.Router();

climatesRouter.post('/', rescue(ClimatesController.create));
climatesRouter.get('/', rescue(ClimatesController.getAll));
climatesRouter.get('/:id', rescue(ClimatesController.getById));

climatesRouter.use(ClimatesErrorController);

module.exports = climatesRouter;
