const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const Users = require("../models/users");
const methodOverride =  require('method-override');

const controller = {
    index: (req,res) =>{
        res.render("index", { title: "La prueba de fuego"})
    },

    login: (req,res) => {
        res.render("login")
    },

    processLogin: (req,res) => {
        res.render("login")
    },
   
    register: (req,res) => {
        res.render("register")
    },
   
    processRegister: (req,res) => {
        let data = Users.fetchUsers();
        let ultimo = data.length-1;        
        let errors = validationResult(req);

        if (errors.isEmpty()) {
      
        let newUser ={
            id: Number(data[ultimo].id)+1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            avatar: "../../images/avatar/"+req.file.filename
        };
        
        data.push(newUser);
        Users.modifyData(data);
        res.redirect("/")
    }
    else{
        console.log(req.body);
        res.render("register", { errors: errors.mapped(), old: req.body });
     } 
    },

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

module.exports = controller;