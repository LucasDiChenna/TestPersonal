const fs = require('fs');
const path = require('path');
const Users = require("../models/users");

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

    },

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