const rescue = require('express-rescue');
const express = require('express');
const DistrictsController = require('../controllers/DistrictsController');
const DistrictsErrorController = require('../controllers/errors/DistrictsErrorController');

const districtsRouter = express.Router();

districtsRouter.post('/', rescue(DistrictsController.create));
districtsRouter.get('/', rescue(DistrictsController.getAll));
districtsRouter.get('/:id', rescue(DistrictsController.getById));

districtsRouter.use(DistrictsErrorController);

module.exports = districtsRouter;
