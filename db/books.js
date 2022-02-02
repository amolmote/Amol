const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },
    added_data : {
        type : String,
        required : true,
        default : new Date(Date.now())
    }
})


const Books = mongoose.model("Books",bookSchema)

module.exports = Books
