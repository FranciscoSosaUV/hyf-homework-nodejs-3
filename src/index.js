const express = require('express'); //da acceso a la biblioteca express buscando en sus node_modules "express"
const app = express(); // crea una instancia del constructor express, al que llamaremos "aplicación".

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const users=[{"":""}];
app.get('/', function(req,res){ //GET 
    res.send('Hello World!')
})

app.get('/users', function(req,res){ //GET 
    res.send(users)
})

app.get('/user/:id', function(req,res){ //GET 
    console.log(req.params.id)
    res.send(users)
})
//create a user
app.post ('/user', function(req,res){//Post add user id,name
    const id=req.body.id;
    const name=req.body.name

    const userjson = ({
        id:req.body.id,
        name: req.body.name
    })
        users.push(userjson)
        res.send(userjson)
        
})

app.listen(3000,function(){
    console.log("server is running")  // iniciará el servidor localmente en el puerto que proporcione como primer argumento 
    })