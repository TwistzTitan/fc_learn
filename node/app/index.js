var {createUserNameCommand} = require('./data/commands')
var {getUsersNameQuery} = require('./data/queries')
const express = require('express')
const app = express()
const port = 3000;

app.get('/',(req,res)=> {

  createUserNameCommand('John Doe', (err, result) => {
    if(err){
      console.log('Error : '+err)
    }
    else {
      console.log('Success: User name'+ result.name +' was created!')
      res.redirect('/users');
    }
  })


});

app.get('/users',(req,res)=>{
  getUsersNameQuery((err, result)=>{
    
    if(err){
      console.log(err)
      res.send(err)
    }
    else {
      console.log(result)
      res.send(result)
    }
  })
});

app.listen(port,()=>{
  console.log('Node App - Running on ' + port)
})