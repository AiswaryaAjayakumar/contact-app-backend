const bodyParser = require('body-parser')
var express=require('express')
var mongoose=require('mongoose')
const { contactModel } = require('./models/contactsmodel')

var app=express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("CONTACTS")
})
app.post('/contact',(req,res)=>{
 
    var contactObject= new contactModel(req.body)
    res.json(contactObject)
})
app.listen(process.env.POST||3005,()=>{

    console.log("Server started at http://localhost:3005/")
})
