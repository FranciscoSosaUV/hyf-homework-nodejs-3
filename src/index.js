const express = require('express'); //da acceso a la biblioteca express buscando en sus node_modules "express"
const app = express(); // crea una instancia del constructor express, al que llamaremos "aplicación".

const bodyParser = require('body-parser');
app.use(bodyParser.json());
//HEADERS middleware 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  });
    //------------------------------------------------------------------
var ids = -1;
const users=[];
app.get('/', function(req,res){ //GET 
    res.send('Hello World!')
})

app.get('/users', function(req,res){ //GET 
    res.send(users);
})

app.get('/user/:id', function(req,res){ //GET 
    console.log(req.params.id)

    for (var i=0;i<=users.length-1;i++){
        if(users[i].id==req.params.id){
            
            res.send(users[i])
            break
        };
    }res.send("No exist")
         
    
})
// delete user
app.delete('/user/:id', function(req,res){ //GET 
    
    if(users.length!=0){
    for (var i=0;i<=users.length;i++){
        if(users[i].id==req.params.id){
            users.splice(i, 1);
            res.status(202).send(users);
            
        }  
    }
}else{res.status(204).send("user is not found")}

  
})
//create a user
app.post ('/user', function(req,res){//Post add user name
    ids++;
    const userjson = ({
        "id":ids,
        
    })
        
        users.push(userjson)
        res.send(users[users.length-1])
        
})

app.listen(3000,function(){
    console.log("server is running")  // iniciará el servidor localmente en el puerto que proporcione como primer argumento 
    })

