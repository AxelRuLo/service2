const express = require('express');
const ruta = express.Router();

ruta.post("/acces/:email/:password/:name",function (req,res) {
    let email = req.params.email;
    let password = req.params.password;
    let name = req.params.name;

    if(email.includes("@") && password.includes("AP") && name.length > 0){
        res.send(true);
    }else{
        res.status(403).send(false)
    }
    
})

module.exports = ruta;