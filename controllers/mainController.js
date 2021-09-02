const fs = require('fs');
const path = require('path');


const controller = {
    index: (req,res) =>{
        res.render("index", { title: "test de levantar sv"})
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
        let newUser ={
            id: Number(data[ultimo].id)+1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        image: "../../images/avatar"+req.file.filename
        };
        
        if (userList == undefined){
            let userList = [];
        }
        else{
            new user
        }

    },
}

module.exports = controller;