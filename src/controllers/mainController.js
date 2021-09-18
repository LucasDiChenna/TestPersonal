const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const Users = require("../../modelos/users");
const methodOverride =  require('method-override');

const mainController = {
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

    
    songList: (req,res)=>{
       db.Cancion.findAll({
           include:[{association:"albumes"},{association:"generos"}]
       })
    
       .then(song => res.render("songList",{song: song}))
    },
    songByID: (req,res)=>{
        db.Cancion.findByPk(req.params.id,{
            include:[{association:"albumes"},{association:"generos"}]})
        .then(song => res.render("songDetail", {song: song})); 
    },
    albumByID: (req,res)=>{
        db.Cancion.findAll({
            where: { id_album: req.params.id},
            include:[{association:"albumes"}]})
        .then(song => res.render("albumDetail", {song: song}))
        .catch(err => console.log(err))
    },
    
}

module.exports = mainController;