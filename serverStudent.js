//main file of server

const express = require('express')

const bodyParser = require('body-parser');


const studentRouter = require('./routers/student');

const adminRouter = require('./routers/adminRoutes');



var app = express();

app.use(bodyParser.json());

const port = 4111;


//headers to avoid cors error
app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();

});



//connection of server with database
const mongoose = require('mongoose');

const db = mongoose.connection;



//studentdb is the database in the mongodb

mongoose.connect('mongodb://localhost:27017/studentdb',{})


db.once('open',()=>{
    console.log("database connected with server");
})


app.use('/student',studentRouter);

app.use('/admin',adminRouter);



app.listen(port,()=>{
    console.log(`student server is running ${port}`)
})