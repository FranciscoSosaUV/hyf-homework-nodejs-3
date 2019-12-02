const express = require('express'); //da acceso a la biblioteca express buscando en sus node_modules "express"
const app = express(); // crea una instancia del constructor express, al que llamaremos "aplicación".

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function(req,res){ //GET 
    res.send('Hello World!')
})

app.get('/users', function(req,res){ //GET 
    res.send({users:[]})
})

app.listen(3000,function(){
    console.log("server is running")  // iniciará el servidor localmente en el puerto que proporcione como primer argumento 
    })