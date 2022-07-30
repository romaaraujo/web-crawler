const { body } = require('express-validator');
const benefitController = require("./controllers/benefitController");

const router = require("express").Router();

router.get(
    '/benefit',
    body('cpf').exists().isNumeric(),
    body('user').exists(),
    body('password').exists(),
    benefitController.get
);

module.exports = router;