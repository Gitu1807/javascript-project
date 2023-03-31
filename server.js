var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');


mongoose.coonect("mongodb://localhost:27017/act",{useNewUrlParser: true,  useUnifiedTopology: true},function checkDB(error)
{
    if(error)
    {
        console.log("error")
    }
    else
    {
        console.log("DB connected!!!!!")
    }
});




server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("error")
    }
    else
    {
        console.log("started")
    }
});
