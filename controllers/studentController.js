

const BookModel = require('../db/books')//table created in database

const Admin = require('../db/admin')

exports.getBooks = (req,res)=>{
    res.send("this is get book");
}
 
exports.getData = (req,res)=>{
  res.send("this is get data");
}


