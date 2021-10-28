const rescue = require('express-rescue');
const express = require('express');
const DatesController = require('../controllers/DatesController');
const DatesErrorController = require('../controllers/errors/DatesErrorController');
const validateDatesData = require('../validators/datesValidators');

const datesRouter = express.Router();

datesRouter.post('/', rescue(validateDatesData, DatesController.create));
datesRouter.get('/', rescue(DatesController.getAll));
datesRouter.get('/:id', rescue(DatesController.getById));

datesRouter.use(DatesErrorController);

module.exports = datesRouter;
