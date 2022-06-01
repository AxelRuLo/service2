var express = require('express');
var app = express();
const port = process.env.PORT || 3000
const register = require("./routes/register")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/register", register)

app.listen(port, function () {
    console.log(`servicio 2 funcionando en el puerto ${port}`)
});