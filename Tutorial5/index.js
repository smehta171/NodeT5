var http = require('http')
var mongoose = require('mongoose')
var express = require('express')
var route = require('./route')

var bodyParser =require('body-parser')

mongoose.connect('mongodb+srv://shruti:B4JUfN2R4axwh7Ba@cluster0.7mq9h.mongodb.net/SchoolManagement?retryWrites=true&w=majority').then(()=>{
    console.log('DB Connected....')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    http.createServer(app).listen(process.env.PORT||3000);
        console.log('server started')
})