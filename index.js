const express = require('express');

var   app = express();
const bodyParser =require('body-parser'); //required for post method

var port = 4001

app.use(bodyParser.json());                 //required for post method

var urlencode = bodyParser.urlencoded({extend:true});

app.get('/',function(req,res){
console.log(req.query);
   
res.end("response complited");
})


app.post('/userapi',urlencode,function(req,res){
    console.log(req.body)
    res.send('post method call');
    res.end();
})




app.listen(port,function(req,res){
    console.log(`server is running  ${port}`);
})