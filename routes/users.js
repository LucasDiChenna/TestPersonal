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
let usersController = require("../src/controllers/usersController")

const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, './public/images/avatar/'); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})

var upload = multer({ storage: storage});

router.get('/', usersController.userList);
router.get('/:id', usersController.userByID);
router.get('/:id/edit', usersController.editUser);
router.put('/:id/edit', [validateRegister, upload.single("avatar")], usersController.updateUser);

module.exports = router;
