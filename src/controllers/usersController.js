const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const Users = require("../../modelos/users");
const methodOverride =  require('method-override');


let usersController = {
    editUser:(req,res)=>{
        let userToEdit = Users.findUserByID(req.params.id)
        res.render('edit',{user: userToEdit})
        
    },

    updateUser:(req,res)=>{
        let data = Users.fetchUsers();
        let userToModify = Users.findUserByID(req.params.id);
        
        userToModify.first_name = req.body.first_name,
        userToModify.last_name = req.body.last_name,
        userToModify.email = req.body.email,
        userToModify.password = req.body.password,
        userToModify.avatar = "../../images/avatar/"+req.file.filename
        Users.modifyData(data);
        
        res.render('userDetail',{user: userToModify})

    } ,

    userList: (req,res)=>{
        let data = Users.fetchUsers();
        res.render("userList",{user: data})
    },
    userByID: (req,res)=>{
        let userFound = Users.findUserByID(req.params.id)

        res.render("userDetail", {user: userFound}) 
    }
}

module.exports = usersController;