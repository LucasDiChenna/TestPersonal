var express = require('express');
var router = express.Router();

let mainController = require("../controllers/mainController")


/* GET home page. */
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.post('/register', mainController.processRegister);

module.exports = router;
