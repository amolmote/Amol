

//admin controller panel

const AdminModal = require('../db/admin')

const bcrypt = require('bcrypt')


exports.addBooks = (req,res)=>{

    res.send('hiii admin here')
}

exports.regAdmin = (req, res) => {

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(String(req.body.password), salt).then((hash) => {

            AdminModal.insertMany({ "name": req.body.name, "mobileNo": req.body.mobileNo, "email": req.body.email, "password": hash })

                .then((result) => {
                    console.log(result)
                    res.send("Admin REgisteded ")
                }).catch((error) => {
                    console.log(error)

                    if (error.code == 11000) {
                        res.send("Admin Already Registered")

                    }
                    else {

                        res.send("Something Went Wrong")
                    }
                })
        }).catch((err) => {
            console.log(err)
            res.send("Erro in Gen Hash")
        })
    })
}


exports.adminLogin  =  (req,res) =>{

    AdminModal.findOne({"email" : req.body.email}).then((data)=>{
        console.log(data)

        if(data  ===  null || data === undefined  )
        {

            res.send("You Are Not a Registered User")
        }
        else
        {
            // res.status(200).send({ msg :  "Data Found with hash "  , hash : data.password})

            bcrypt.compare(req.body.password , data.password  ,function(err , result){
                if(err){

                    res.status(400).send("Somenthing Went Wrong")
                    //error in bcrypt

                }

                if(result  === true )
                {
                    res.status(200).send({msg : "Login Successfully" , id : data.id })
                        //client side response status code 200 means res is successfull
                }
                else
                {
                    res.status(401).send({msg : "Login Failed" , id : null })
                        //401 means the client is not unauthorizes
                }

            })
            
        }

    }).catch((err)=>{
        console.log(err)
        res.send("Error Occured")
    })

}


exports.getAdmin  = (req,res) =>{
    AdminModal.find({}).then((result)=>{
        if(result.length < 1){
       res.status(404).send(result)
    }
    else{
        console.log(result)
        res.status(200).send(result)
       
        }

    }).catch((err)=>{
        res.status(400).send("Something Went Wrong")
    })
}
