var express = require('express');
var router = express.Router();
const fs = require("fs");
const path = require("path");

let mainController = require("../controllers/mainController")

const multer = require("multer");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatar'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
  
var upload = multer({ storage: storage})

/* GET home page. */
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.post('/register', upload.single("avatar"), mainController.processRegister);
router.get('/userlist', mainController.userList);
router.get('/:id', mainController.userByID);

module.exports = router;
