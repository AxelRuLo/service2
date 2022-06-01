const express = require('express');
const ruta = express.Router();

ruta.post("/acces",function (req,res) {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;

    if(email.includes("@") && password.includes("AP") && name.length > 0){
        res.send(true);
    }else{
        res.status(403).send(false)
    }
    
})

module.exports = ruta;