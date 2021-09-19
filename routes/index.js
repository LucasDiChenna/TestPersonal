var express = require('express');
var router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { check } = require("express-validator");

const validateRegister = [ 
   check("first_name")
   .isLength({ min: 4 }).withMessage("You have to give a valid name for your account.")
   .notEmpty().withMessage("You have to set your account's first name."),
   check("last_name").notEmpty().withMessage("You have to set your account's last name."),
   check("email")
   .notEmpty().withMessage("You have to set your account's email.").bail()
   .isEmail().withMessage("You have to set a valid e-mail for your account."),
   check("password")
   .notEmpty().withMessage("You have to set your account's password.").bail()
   .isLength( { min: 5 }).withMessage("Your password must be longer than 8 characters."),
];
const validateSong = [ 
   check("name")
   .notEmpty().withMessage("You have to set a name.")
   .isLength({ min: 4 }).withMessage("You have to give a valid name."),
   check("id_genero").notEmpty().withMessage("You have to set the song's gender."),
   check("compositor")
   .notEmpty().withMessage("You have to set the song's writer.").bail()
   .isLength( { min: 5 }).withMessage("You have to set a valid song's writer."),
   check("precio")
   .notEmpty().withMessage("You have to set the song's price.").bail()
];

let mainController = require("../src/controllers/mainController")

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
router.post('/register', [validateRegister, upload.single("avatar")], mainController.processRegister);
router.get('/songlist', mainController.songList);
router.get('/uploadSong', mainController.uploadSong);
router.post('/uploadSong', [validateSong, upload.single("cover")], mainController.upload);
router.get('/album/:id', mainController.albumByID);
router.get('/song/:id', mainController.songByID);
router.get('/gender/:id', mainController.genderByID);


module.exports = router;
